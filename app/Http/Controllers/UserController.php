<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    

    function myprofile(){
        $user=auth()->user();
        $infos=User::with('ville','books')->find($user->id);
        return $infos;
    }
}
