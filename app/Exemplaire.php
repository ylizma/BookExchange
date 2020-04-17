<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Exemplaire extends Model
{

    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
    */
    protected $fillable = [
        'langue', 'etat', 'livre_id', 'user_id'
    ];

    public function photos()
    {
        return $this->hasMany(PhotoLivre::class);
    }

    public function livre()
    {
        return $this->belongsTo(Livre::class);
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
