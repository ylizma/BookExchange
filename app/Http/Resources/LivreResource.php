<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LivreResource extends JsonResource
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
            'titre' => $this->titre,
            'auteurs' => $this->auteurs,
            'isbn' => $this->isbn,
            'date_publication' => $this->date_publication,
            'resume' => $this->resume,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'categorie' => $this->categorie,
        ];
    }
}
