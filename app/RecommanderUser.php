<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RecommanderUser extends Model
{

    protected $fillable = [
        'from_user_id',
    ];
    

    
    public function recommandations()
    {
        return $this->belongsTo('App\User','to_user_id');
    }


}
