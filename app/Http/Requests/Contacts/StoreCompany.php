<?php

namespace App\Http\Requests\Contacts;

use Illuminate\Foundation\Http\FormRequest;

class StoreCompany extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|unique:contact_companies,companies_name|min:3',
            'defaultEmail' => 'required|email|unique:contact_companies,companies_defaultEmail'
        ];
    }
}
