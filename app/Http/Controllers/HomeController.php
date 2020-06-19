<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exemplaire;
use App\Http\Resources\ExemplaireResource;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (auth()->user()) {
            $exemplaire = Exemplaire::where('user_id', '<>', auth()->user()->id)
                ->where('disponible', true)
                ->with('livre', 'photos')
                ->orderBy('created_at', 'desc')
                ->paginate(20);
            // die("eeeeeeeeeeeeee");
            return ExemplaireResource::collection($exemplaire);
        } else {
            $exemplaire = Exemplaire::where('disponible', true)
                ->with('livre', 'photos')
                ->orderBy('created_at', 'desc')
                ->paginate(20);
            return ExemplaireResource::collection($exemplaire);
        }
    }

    public function search(Request $request)
    {

        if (auth()->user()) {
            $exemplaire = Exemplaire::where('user_id', '!=', auth()->user()->id)
                ->where('disponible', true)
                ->andWhere('livre.titre', 'LIKE', '%' . $request->title . '%')
                ->andWhere('user.city.id', '=', $request->city)
                ->andWhere('livre.category.id', '=', $request->category)
                ->orderBy('created_at', 'desc')
                ->paginate(20);
            // die("eeeeeeeeeeeeee");
            return ExemplaireResource::collection($exemplaire);
        } else {

            // return $w;
            if (!empty($request->city) && empty($request->category)) {
                $exemplaire = Exemplaire::whereHas('livre', function ($q) use ($request) {
                    $q->where('titre', 'LIKE', '%' . $request->key . '%');
                })
                    ->whereHas('user', function ($q) use ($request) {
                        $q->where('ville_id', '=', $request->city);
                    })
                    // ->with('livre', 'user','photos')
                    ->where('disponible', true)
                    ->orderBy('created_at', 'desc')
                    ->get();
            } elseif (empty($request->city) && !empty($request->category)) {
                $exemplaire = Exemplaire::whereHas('livre', function ($q) use ($request) {
                    $q->where('titre', 'LIKE', '%' . $request->key . '%');
                })
                    ->whereHas('livre', function ($q) use ($request) {
                        $q->where('categorie_id', '=', $request->category);
                    })
                    // ->with('livre', 'user','photos')
                    ->where('disponible', true)
                    ->orderBy('created_at', 'desc')
                    ->get();
            } else if (empty($request->city) && empty($request->category) && !empty($request->key)) {
                $exemplaire = Exemplaire::whereHas('livre', function ($q) use ($request) {
                    $q->where('titre', 'LIKE', '%' . $request->key . '%');
                })
                    // ->with('livre', 'user','photos')
                    ->where('disponible', true)
                    ->orderBy('created_at', 'desc')
                    ->get();
            } else if (empty($request->city) && empty($request->category) && empty($request->key)) {
                return $this->index();
            } else {
                $exemplaire = Exemplaire::whereHas('livre', function ($q) use ($request) {
                    $q->where('titre', 'LIKE', '%' . $request->key . '%');
                })
                    ->whereHas('livre', function ($q) use ($request) {
                        $q->where('categorie_id', '=', $request->category);
                    })
                    ->whereHas('user', function ($q) use ($request) {
                        $q->where('ville_id', '=', $request->city);
                    })
                    // ->with('livre', 'user','photos')
                    ->where('disponible', true)
                    ->orderBy('created_at', 'desc')
                    ->get();
            }
            return ExemplaireResource::collection($exemplaire);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
