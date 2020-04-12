<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Livre;
use App\Http\Resources\LivreResource;

class LivreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return LivreResource::collection(Livre::paginate(25));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $livre = Livre::create([
            'titre' => $request->titre,
            'auteurs' => $request->auteurs,
            'isbn' => $request->isbn,
            'date_publication' => $request->date_publication,
            'resume' => $request->resume,
            'categorie_id' => $request->categorie_id
        ]);

        return new LivreResource($livre);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Livre $livre)
    {
        return new LivreResource($livre);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Livre $livre)
    {
        $livre->update($request->only(['titre', 'auteurs','isbn','date_publication','resume','categorie_id']));

        return new LivreResource($livre);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Livre $livre)
    {
        $livre->delete();
        return response()->json(null, 204);
    }
}
