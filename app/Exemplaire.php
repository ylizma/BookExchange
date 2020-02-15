<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Exemplaire extends Model
{
    //Uncompleted

    /**
     * The attributes that are mass assignable.
     *
     * @var array
    */
    protected $fillable = [
        'langue', 'etat', 'categorie_id'
    ];

    public function categorie()
    {
        return $this->belongsTo(Categorie::Class);
    }

    public function photos()
    {
        return $this->hasMany(PhotoLivre::class);
    }

    public function livre()
    {
        return $this->belongsTo(Livre::class);
    }
}
