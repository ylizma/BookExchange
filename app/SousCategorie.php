<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SousCategorie extends Model
{

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
    */
    protected $fillable = [
        'nom', 'categorie_id'
    ];

    public function categorie()
    {
        return $this->belongsTo(Categorie::Class);
    }

}
