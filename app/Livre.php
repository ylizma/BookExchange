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
        'titre', 'auteurs', 'isbn', 'date_publication', 'resume','type_id'
    ];

    public function exemplaires()
    {
        return $this->hasMany(Exemplaire::class);
    }
    public function type()
    {
        return $this->belongsTo('App\Type');
    }

}
