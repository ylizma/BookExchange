<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Exemplaire;
use App\Livre;
use App\PhotoLivre;

use App\Http\Resources\ExemplaireResource;

class ExemplaireController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $ex=Exemplaire::where('user_id','=',auth()->user()->id)->with('livre','photos')->paginate(5);
        return $ex;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $livre = Livre::where('isbn', $request->isbn)->first();
        
        if ($livre === null) {
            // livre doesn't exist, so we will create it :D
            $livre = Livre::create([
                'titre' => $request->title,
                'auteurs' => $request->author,
                'isbn' => $request->isbn,
                'resume' => $request->resume,
                'categorie_id' => $request->categorie_id
            ]);
        }
        
        $userid=auth()->user()->id;
        $exemplaire = Exemplaire::create([
            'langue' => $request->lang,
            'etat' => $request->status,
            'user_id' => $userid,
            'livre_id' => $livre->id,
        ]);

        $i = 0;
        foreach($request->file('imgs') as $file){
            $photo = new PhotoLivre;

            $savePath = 'images/books'; // save path
            // name it differently by time and count
            $imageName = time() . $i . '.' . $file->getClientOriginalExtension();
            // move the file to desired folder
            $file->move($savePath, $imageName);
            // assign the location of folder to the model
            $photo->image = $imageName;
            $photo->exemplaire_id= $exemplaire->id;
            $photo->save();
            $i++;
        }

        return new ExemplaireResource($exemplaire);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Exemplaire $exemplaire)
    {
        return new ExemplaireResource($exemplaire);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Exemplaire $exemplaire)
    {
        $exemplaire->update($request->only(['langue', 'etat','livre_id']));

        //update images


        return new ExemplaireResource($exemplaire);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Exemplaire $exemplaire)
    {
        $exemplaire->delete();

        return response()->json(null, 204);
    }
}
