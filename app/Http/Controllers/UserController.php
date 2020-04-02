<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Ville;

class UserController extends Controller
{
    
    function myprofile(){
        $user=auth()->user();
        $infos=User::with('ville')->find($user->id);
        return $infos;
    }

    function mybooks(){
        $user=auth()->user();
        $infos=User::with('books')->find($user->id);
        return $infos;
    }

        /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req){
        request()->validate([
            'imgs' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'name'=>'required|max:20',
            'password'=>'required|max:20',
            'telephone'=>'min:10',
            'email'=>'required'
       ]);
        $user= auth()->user();
       $user->name=$req->name;
       $user->ville_id=$req->ville;
       $user->password=bcrypt($req->password);
       $user->name=$req->name;
       $user->email=$req->email;
       $user->telephone=$req->telephone;
       if ($files = $req->file('imgs')) {
        $destinationPath = 'images/users/'; // upload path
        $profileImage = time(). "." . $files->getClientOriginalExtension();
        $user->image=$profileImage;
     }
     if($files->move($destinationPath, $profileImage) && $user->save()){
        return response()->json(['message' => 'succesfuly updated','user'=>$user], 200);
     }
     else return response()->json(['message' => 'internal erro'], 500);
    }


}
