<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\DatabaseNotification;

class Notification extends DatabaseNotification
{
    use \Staudenmeir\EloquentJsonRelations\HasJsonRelationships;

    protected $table = 'notifications';

    protected $casts = [
        'data' => 'json',
    ];

    public function notifiable_user()
    {
        return $this->belongsTo('App\User', 'notifiable_id');
    }

    public function proposal_book()
    {
        return $this->belongsToJson('App\Exemplaire', 'data->proposal_book');
    }

    public function desired_book()
    {
        return $this->belongsToJson('App\Exemplaire', 'data->desired_book');
    }

    public function user()
    {
        return $this->belongsToJson('App\User', 'data->user');
    }
}
