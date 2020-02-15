<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PhotoLivre extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
    */
    protected $fillable = [
        'image', 'exemplaire_id'
    ];

    public function exemplaire()
    {
        return $this->belongsTo(Exemplaire::Class);
    }
}
