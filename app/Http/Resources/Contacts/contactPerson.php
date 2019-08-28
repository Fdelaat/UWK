<?php

namespace App\Http\Resources\Contacts;

use Illuminate\Http\Resources\Json\JsonResource;

class contactPerson extends JsonResource
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
            'nameSlug' => $this->contactPeople_nameSlug,
            'initials' => $this->contactPeople_initials,
            'firstName' => $this->contactPeople_firstName,
            'middleName' => $this->contactPeople_middleName,
            'lastName' => $this->contactPeople_lastName,
            'phoneNumber' => $this->contactPeople_phoneNumber,
            'mobilePhoneNumber' => $this->contactPeople_mobilePhoneNumber,
            'email' => $this->contactPeople_email,
            'company' => new contactCompany($this->company)
        ];
    }
}
