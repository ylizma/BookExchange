<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RecommanderUser;
use App\User;

class RecommandationUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $req=RecommanderUser::where('from_user_id','=',auth()->user()->id)->get();
        return response()->json($req);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $recommanded_user=User::find($request->input('recommanded'));
        $existAlready=RecommanderUser::where('from_user_id',auth()->user()->id)->where('to_user_id',$recommanded_user->id)->get();
        if($existAlready==null){
            $recobj=new RecommanderUser;
            $recobj->from_user_id=auth()->user()->id;
            $recommanded_user->recommand()->save($recobj);
            return response()->json('inserted', 200);
        }else{
            return response()->json('exist already !!', 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
         return RecommanderUser::find($id);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $rec=RecommanderUser::find($id);
        $rec->delete();
    }
}
