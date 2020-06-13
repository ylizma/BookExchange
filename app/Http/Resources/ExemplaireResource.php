<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ExemplaireResource extends JsonResource
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
            'langue' => $this->langue,
            'etat' => $this->etat,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at,
            'disponible' => $this->disponible,
            'archived' => $this->archived,
            'img' => $this->photos,
            'livre' => [
                'livre' => $this->livre,
                'categorie' => $this->livre->categorie,
            ],
            'user' => [
                'name' => $this->user->name,
                'id' => $this->user->id,
                'email' => $this->user->email,
                'telephone' => $this->telephone
            ],
        ];
    }
}
