<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Exemplaire;
use App\Livre;

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
        return ExemplaireResource::collection(Exemplaire::paginate(25));
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
                'titre' => $request->titre,
                'auteurs' => $request->auteurs,
                'isbn' => $request->isbn,
                'date_publication' => $request->date_publication,
                'resume' => $request->resume,
                'categorie_id' => $request->categorie_id
            ]);
        }

        $exemplaire = Exemplaire::create([
            'langue' => $request->langue,
            'etat' => $request->etat,
            'user_id' => $request->user_id,
            'livre_id' => $livre->id,
        ]);

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
