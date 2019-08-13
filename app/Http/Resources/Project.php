<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Project extends JsonResource
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
            'projectId' => (int)$this->id,
            'projectNaam' => $this->name,
            'projectNummer' => (int) $this->number,
            'vestiging' => $this->branchOffice,
            'projectLocatie' => $this->location,
            'projectPlaats' => $this->city,
            'klant' => $this->clientName,
            'adviseur' => $this->consultantName,
            'architect' => $this->architectName,
            'omschrijving' => $this->description
        ];
    }
}
