<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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

        $user = auth()->user()->id;

        $user->exchanges()->attach($my_book);

        $user->exchanges()->updateExistingPivot($my_book, [
            'desired_book' => $desired_book,
            'requested_at' => date("Y-m-d H:i:s"),
        ], false);

        return response()->json(['message' => 'success'], 200);
    }

}
