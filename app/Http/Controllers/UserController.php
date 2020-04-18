<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Ville;
use File;

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
            'img' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'name'=>'required|max:20',
            'telephone'=>'nullable|max:10',
            'email'=>'required',
            'password'=>'nullable'
       ]);

       $user= auth()->user();
       $user->name=$req->name;
       $user->ville_id=$req->ville_id;
       $user->email=$req->email;
       $user->telephone=$req->telephone;
       if ($files = $req->file('img')) {
        $destinationPath = 'images/users/'; // upload path
        if(File::exists($destinationPath.$user->image))
            File::delete($destinationPath.$user->image);
        $profileImage = time(). "." . $files->getClientOriginalExtension();
        $user->image=$profileImage;
        $files->move($destinationPath, $profileImage);
     }
     if($req->password){
         $user->password=bcrypt($req->password);
     }
     if($user->save()){
        return response()->json(['message' => 'succesfuly updated','user'=>$user], 200);
     }
     else return response()->json(['message' => 'internal error some how'], 500);
    }
}
