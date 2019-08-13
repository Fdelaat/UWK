<?php

namespace App\Http\Resources\Contacts;

use Illuminate\Http\Resources\Json\JsonResource;

class contactProductGroups extends JsonResource
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
            'id' => (int) $this->id,
            'slug' => $this->productgroup_nameSlug,
            'name' => $this->productgroup_name,
            'description' => $this->productgroup_description,
        ];
    }
}
