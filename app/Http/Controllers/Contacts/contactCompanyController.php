<?php

namespace App\Http\Controllers\Contacts;

use App\contactCompany;
use Illuminate\Http\Request;
use Laravel\Scout\Searchable;
use App\Http\Controllers\Controller;
use Spatie\QueryBuilder\QueryBuilder;
use App\Events\Contacts\CompanySaved;
use App\Events\Contacts\CompanyUpdated;
use App\Events\Contacts\CompanyDestroy;
use App\Http\Requests\Contacts\StoreCompany;
use App\Http\Requests\Contacts\UpdateCompany;
use App\Http\Resources\Contacts\contactCompanyCollection;
use App\Http\Resources\Contacts\contactCompany as contactCompanyResource;

class contactCompanyController extends Controller
{

    use Searchable;

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getView()
    {
        return view('contact.company');
    }

    public function index()
    {
        $response = new contactCompanyCollection(QueryBuilder::for(contactCompany::class)
            ->defaultSort('companies_name')
            ->paginate(8)
        );

         if ( ! $response)
         {
             return response()->json([
                 'error' => 'Something went wrong!'
             ], 404);
         }
         return response()->json($response, 200);
    }

    public function name()
    {
        $response = contactCompany::all('id','companies_name')->toArray();

        if ( ! $response)
        {
            return response()->json([
                'error' => 'Something went wrong!'
            ], 404);
        }
        return response()->json($response, 200);
    }

    public function store(StoreCompany $request)
    {
        $contactCompany = new contactCompany();
        $contactCompany->forceCreate([
            'companies_name' => Request('name'),
            'companies_streetName' => Request('streetName'),
            'companies_streetNumber' => Request('streetNumber'),
            'companies_streetPostalCode'=> Request('streetPostalCode'),
            'companies_city' => Request('city'),
            'companies_postalBox' => Request('postalBox'),
            'companies_postalBoxCode' => Request('postalBoxCode'),
            'companies_PostalBoxCity' => Request('PostalBoxCity'),
            'companies_country' => Request('country'),
            'companies_defaultEmail' => Request('defaultEmail'),
            'companies_projectEmail' => Request('projectEmail')
        ]);
        broadcast(new CompanySaved($contactCompany))->toOthers();

        return response()->json(['message' => 'Bedrijf aangemaakt!', 'type' => 'success'],200);
    }

    public function update(UpdateCompany $request)
    {
        $contactCompany = contactCompany::findOrFail($request->input('id'));
        $contactCompany->fill([
            'companies_name' => Request('name'),
            'companies_streetName' => Request('streetName'),
            'companies_streetNumber' => Request('streetNumber'),
            'companies_streetPostalCode'=> Request('streetPostalCode'),
            'companies_city' => Request('city'),
            'companies_postalBox' => Request('postalBox'),
            'companies_postalBoxCode' => Request('postalBoxCode'),
            'companies_PostalBoxCity' => Request('PostalBoxCity'),
            'companies_country' => Request('country'),
            'companies_defaultEmail' => Request('defaultEmail'),
            'companies_projectEmail' => Request('projectEmail')
        ])->save();
        broadcast(new CompanyUpdated($contactCompany))->toOthers();

        return response()->json(['message' => 'Bedrijf aangepast!', 'type' => 'info'],200);
    }

    public function destroy($id)
    {
        $contactCompany = contactCompany::findOrFail($id);
        $contactCompany->delete();

        broadcast(new CompanyDestroy($contactCompany))->toOthers();

        return response()->json(['message' => 'Bedrijf verwijderd!','type' => 'danger'],200);
    }

    public function search(Request $request)
    {
        $response = new contactCompanyCollection(contactCompany::search($request->input('q'))->paginate(8));

        if ( ! $request->input('q'))
        {
            return response()->json([
                'message' => 'Something went wrong!',
                'type' => 'danger'
            ], 404);
        }
        return response()->json($response, 200);
    }
}
