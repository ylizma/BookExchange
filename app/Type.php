<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
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

    public function livre()
    {
        return $this->belongsTo(Livre::Class);
    }

    public function categorie()
    {
        return $this->hasMany('App\Categorie');
    }

}
