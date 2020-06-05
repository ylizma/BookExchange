<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Exchange extends Pivot
{
    protected $table = 'exchanges';

    public function userbook()
    {
        return $this->belongsTo(Exemplaire::class, 'my_book', 'id');
    }

    public function desiredbook()
    {
        return $this->belongsTo(Exemplaire::class, 'desired_book', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
