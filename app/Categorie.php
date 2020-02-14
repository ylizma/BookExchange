<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
    */
    protected $fillable = [
        'nom',
    ];

    public function souscategories()
    {
        return $this->hasMany(SousCategorie::class);
    }

}
