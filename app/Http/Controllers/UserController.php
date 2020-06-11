<?php

namespace App\Http\Controllers;

use App\Exchange;
use App\Exemplaire;
use Illuminate\Http\Request;
use App\User;
use App\Ville;
use File;

use App\Http\Resources\ExemplaireResource;

class UserController extends Controller
{

    function myprofile()
    {
        $user = auth()->user();
        $infos = User::with('ville')->find($user->id);
        return $infos;
    }

    function mybooks()
    {
        $user = auth()->user();
        $infos = User::with('books')->find($user->id);
        return $infos;
    }

    public function archived_books()
    {
        return ExemplaireResource::collection(
            Exemplaire::where(
                [
                'user_id' => auth()->user()->id,
                'disponible' => false,
                'archived' => true,
                ]
            )
            ->with('livre', 'photos')
            ->get()
        );
    }

    function bookRequests()
    {
        $user = auth()->user();
        return Exchange::whereIn('desired_book', function ($query) use ($user) {
            $query->select('id')
                ->from('exemplaires')
                ->where('user_id', '=', $user->id);
        })->with('userbook','desiredbook','user','user.ville','userbook.livre','desiredbook.livre')->get();

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req)
    {

        request()->validate([
            'img' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'name' => 'required|max:20',
            'telephone' => 'nullable|max:10',
            'email' => 'required'
        ]);

        $user = auth()->user();
        $user->name = $req->name;
        $user->ville_id = $req->ville_id;
        $user->email = $req->email;
        $user->telephone = $req->telephone;
        if ($files = $req->file('img')) {
            $destinationPath = 'images/users/'; // upload path
            if (File::exists($destinationPath . $user->image))
                File::delete($destinationPath . $user->image);
            $profileImage = time() . "." . $files->getClientOriginalExtension();
            $user->image = $profileImage;
            $files->move($destinationPath, $profileImage);
        }
        if ($req->password != null) {
            $user->password = bcrypt($req->password);
        }
        if ($user->save()) {
            return response()->json(['message' => 'succesfuly updated', 'user' => $user], 200);
        } else return response()->json(['message' => 'internal error some how'], 500);
    }
}
