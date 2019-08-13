<?php

namespace App\Http\Requests\Contacts;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePerson extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'nameSlug' => 'required',
            'firstName' => 'required|min:1',
            'lastName' => 'required|min:3',
            'email' => 'required|email'
        ];
    }
}
