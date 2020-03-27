<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\VilleResource as VilleResource;
use App\Ville;

class VilleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $villes=Ville::paginate(15);
        return VilleResource::collection($villes);
        
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ville=Ville::find($id);
        return $ville;
    }

    public function find($s)
    {
        $s="%".$s."%";
        $ville=Ville::where('nom','like',$s)->get();
        return $ville;
    }


}
