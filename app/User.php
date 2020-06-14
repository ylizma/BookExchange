<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

use App\Notification;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','image'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function ville()
    {
        return $this->belongsTo('App\Ville','ville_id');
    }

        /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function recommand()
    {
        return $this->hasMany('App\RecommanderUser','to_user_id');
    }

    public function books()
    {
        return $this->hasMany('App\Exemplaire');
    }

    public function exchanges()
    {
        return $this->belongsToMany(Exemplaire::class,'exchanges','user_id', 'my_book')
                    ->using(Exchange::class)
                    ->withPivot([
                        'requested_at',
                        'accepted_at',
                        'desired_book'
                    ]);
    }

    public function notifications()
    {
        return $this->morphMany(Notification::class, 'notifiable')
                            ->orderBy('created_at', 'desc')    ;
    }
    public function unreadUserNotifications()
    {
        return $this->morphMany(Notification::class, 'notifiable')->where('read_at',null)
                            ->orderBy('created_at', 'desc');
    }
}
