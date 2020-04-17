<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Livre extends Model
{
    //uncompleted

    /**
     * The attributes that are mass assignable.
     *
     * @var array
    */
    protected $fillable = [
        'titre', 'auteurs', 'isbn', 'resume','categorie_id'
    ];

    public function exemplaires()
    {
        return $this->hasMany(Exemplaire::class);
    }
    public function categorie()
    {
        return $this->belongsTo('App\Categorie');
    }

}
