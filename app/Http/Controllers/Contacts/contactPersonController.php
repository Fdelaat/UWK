<?php

namespace App\Http\Controllers\Contacts;

use App\contactPerson;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;
use App\Events\Contacts\PersonSaved;
use App\Events\Contacts\PersonDestroy;
use App\Events\Contacts\PersonUpdated;
use App\Http\Requests\Contacts\StorePerson;
use App\Http\Requests\Contacts\UpdatePerson;
use App\Http\Resources\Contacts\contactPersonCollection;


class contactPersonController extends Controller {

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getView()
    {
        return view('contact.contactperson');
    }

    public function index()
    {
        $response = new contactPersonCollection(QueryBuilder::for(contactPerson::class)
            ->defaultSort('contactPeople_firstName')
            ->allowedSorts([
                AllowedSort::field('firstName', 'contactPeople_firstName'),
                AllowedSort::field('phoneNumber', 'contactPeople_phoneNumber'),
                AllowedSort::field('mobilePhoneNumber', 'contactPeople_mobilePhoneNumber'),
                AllowedSort::field('email', 'contactPeople_email')])
            ->allowedIncludes(['company'])
            ->paginate(10)
        );

        if ( ! $response)
        {
            return response()->json([
                'error' => 'Something went wrong!'
            ], 404);
        }
        return response()->json($response, 200);
    }

    public function store(StorePerson $request)
    {
        $contactPerson = new contactPerson();
        $contactPerson->forceCreate([
            'contactPeople_nameSlug' => str::snake($request->firstName.$request->lastName),
            'contactPeople_initials' => Request('initials'),
            'contactPeople_firstName' => Request('firstName'),
            'contactPeople_middleName' => Request('middleName'),
            'contactPeople_lastName'=> Request('lastName'),
            'contactPeople_phoneNumber' => Request('phoneNumber'),
            'contactPeople_mobilePhoneNumber' => Request('mobilePhoneNumber'),
            'contactPeople_email' => Request('email'),
            'company_id' => Request('company'),
        ]);
        broadcast(new PersonSaved($contactPerson))->toOthers();

        return response()->json(['message' => 'Nieuw contactpersoon aangemaakt!', 'type' => 'success'],200);
    }

    public function update(UpdatePerson $request)
    {
        $contactPerson = contactPerson::findOrFail($request->input('id'));
        $contactPerson->fill([
            'contactPeople_nameSlug' => Request('nameSlug'),
            'contactPeople_initials' => Request('initials'),
            'contactPeople_firstName' => Request('firstName'),
            'contactPeople_middleName' => Request('middleName'),
            'contactPeople_lastName'=> Request('lastName'),
            'contactPeople_phoneNumber' => Request('phoneNumber'),
            'contactPeople_mobilePhoneNumber' => Request('mobilePhoneNumber'),
            'contactPeople_email' => Request('email'),
            'company_id' => Request('company.id'),
        ])->save();
        broadcast(new PersonUpdated($contactPerson))->toOthers();

        return response()->json(['message' => 'Contactpersoon aangepast!', 'type' => 'info'],200);
    }

    public function destroy($id)
    {
        $contactPerson = contactPerson::findOrFail($id);
        $contactPerson->delete();

        broadcast(new PersonDestroy($contactPerson))->toOthers();

        return response()->json(['message' => 'Contactpersoon verwijderd!', 'type' => 'danger'],200);

    }

    public function search(Request $request)
    {
        $response = new contactPersonCollection(contactPerson::search($request->input('q'))->paginate(10));

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
