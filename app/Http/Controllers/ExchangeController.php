<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exchange;
use App\Exemplaire;
use App\Notifications\ReceivedRequest;
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
        $proposal_book_id = $request->my_book;
        $desired_book_id = $request->desired_book;

        $user = auth()->user();

        $user->exchanges()->attach($proposal_book_id);

        $user->exchanges()->updateExistingPivot($proposal_book_id, [
            'desired_book' => $desired_book_id,
            'requested_at' => date("Y-m-d H:i:s"),
        ], false);

        Exemplaire::find($desired_book_id)->user->notify(new ReceivedRequest($user->id, $desired_book_id, $proposal_book_id));

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
