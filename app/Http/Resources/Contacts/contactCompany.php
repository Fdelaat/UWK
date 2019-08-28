<?php

namespace App\Http\Resources\Contacts;

use Illuminate\Http\Resources\Json\JsonResource;

class contactCompany extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->companies_name,
            'streetName' => $this->companies_streetName,
            'streetNumber' => $this->companies_streetNumber,
            'streetPostalCode' => $this->companies_streetPostalCode,
            'city' => $this->companies_city,
            'postalBox' => $this->companies_postalBox,
            'postalBoxCode' => $this->companies_postalBoxCode,
            'PostalBoxCity' => $this->companies_PostalBoxCity,
            'country' => $this->companies_country,
            'defaultEmail' => $this->companies_defaultEmail,
            'projectEmail' => $this->companies_projectEmail
        ];
    }
}
