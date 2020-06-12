<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exchange;

class ExchangeController extends Controller
{

    /**
     * Exchange
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function exchange(Request $request)
    {
        $my_book = $request->my_book;
        $desired_book = $request->desired_book;

        $user = auth()->user();

        $user->exchanges()->attach($my_book);

        $user->exchanges()->updateExistingPivot($my_book, [
            'desired_book' => $desired_book,
            'requested_at' => date("Y-m-d H:i:s"),
        ], false);

        return response()->json(['message' => 'success'], 200);
    }

    /**
     * Accept an exchange request
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function accept(Request $request)
    {
        $exchange_id = $request->id;
        $exchange = Exchange::find($exchange_id);
        $user_book = $exchange->userbook;
        $desired_book = $exchange->desiredbook;

        if(!$user_book->disponible || !$desired_book->disponible){
            return response()->json(['message' => 'error'], 406);
        }else{
            if($exchange->status == "pending"){
                $exchange->accepted_at = now();
                $exchange->status = "accepted";
                $exchange->save();

                $user_book->disponible = false;
                $user_book->archived = true;
                $user_book->save();

                $desired_book->disponible = false;
                $desired_book->archived = true;
                $desired_book->save();

                return response()->json(['message' => 'success'], 200);
            }else{
                return response()->json(['message' => 'error'], 406);
            }
        }
    }

    /**
     * Refuse an exchange request
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function refuse(Request $request)
    {
        $exchange_id = $request->id;
        $exchange = Exchange::find($exchange_id);

        if($exchange->status == "pending"){
            $exchange->refused_at = now();
            $exchange->status = "refused";
            $exchange->save();

            return response()->json(['message' => 'success'], 200);
        }else{
            return response()->json(['message' => 'error'], 406);
        }
    }

}
