<?php

namespace App\Http\Requests\Contacts;

use Illuminate\Foundation\Http\FormRequest;

class StorePerson extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'firstName' => 'required|min:1',
            'lastName' => 'required|min:3',
            'email' => 'required|email|unique:contact_people,contactPeople_email'
        ];
    }
}
