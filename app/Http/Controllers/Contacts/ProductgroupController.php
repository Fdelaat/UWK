<?php

namespace App\Http\Controllers\Contacts;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\contactProductgroups;
use App\Http\Controllers\Controller;
use App\Events\Contacts\ProductGroupSaved;
use App\Events\Contacts\ProductGroupUpdated;
use App\Events\Contacts\ProductGroupDestroy;
use App\Http\Requests\Contacts\StoreProductGroups;
use App\Http\Requests\Contacts\UpdateProductGroups;
use App\Http\Resources\Contacts\contactProductgroupsCollection;


class ProductgroupController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getView()
    {
        return view('contact.productgroup');
    }

    public function index()
    {
        $response = new contactProductgroupsCollection(contactProductgroups::orderBy('productgroup_name', 'asc')->paginate(10));

        if ( ! $response)
        {
            return response()->json([
                'error' => 'Something went wrong!'
            ], 404);
        }
        return response()->json($response, 200);
    }

    public function store(StoreProductGroups $request)
    {
        $contactProductgroups = new contactProductgroups();
        $contactProductgroups->forceCreate([
                 'productgroup_nameSlug' => str::slug(Request('name'), "_"),
                 'productgroup_name' => Request('name'),
                 'productgroup_description' => Request('description')
         ]);
        broadcast(new ProductGroupSaved($contactProductgroups))->toOthers();

        return response()->json(['message' => 'Nieuwe Productgroep toegevoegd!', 'type' => 'success'],200);
    }

    public function update(UpdateProductGroups $request)
    {
        $contactProductgroups = contactProductgroups::findOrFail($request->input('id'));
        $contactProductgroups->fill([
            'productgroup_nameSlug' => Request('slug'),
            'productgroup_name' => Request('name'),
            'productgroup_description' => Request('description')
        ])->save();
        broadcast(new ProductGroupUpdated($contactProductgroups))->toOthers();

        return response()->json(['message' => 'Productgroep aangepast!', 'type' => 'info'],200);
    }

    public function destroy($id)
    {
        $contactProductgroups = contactProductgroups::findOrFail($id);
        $contactProductgroups->delete();

        broadcast(new ProductGroupDestroy($contactProductgroups))->toOthers();

        return response()->json(['message' => 'Productgroep verwijderd!', 'type' => 'danger'],200);
    }

    public function search(Request $request)
    {
        $response = new contactProductgroupsCollection(contactProductgroups::search($request->input('q'))->paginate(10));

        if ( ! $request->input('q'))
        {
            return response()->json([
                'error' => 'Something went wrong!'
            ], 404);
        }
        return response()->json($response, 200);
    }
}
