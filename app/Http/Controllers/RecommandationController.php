<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exemplaire;
use App\Livre;
use App\Exchange;
use Illuminate\Support\Facades\DB;

class RecommandationController extends Controller
{
    function getRecommandedBooks()
    {
        if (auth()->user()) {
            $exchanges = DB::table('exchanges')->select('desired_book')
                ->where('user_id', 1)->get()->toArray();
                // return $exchanges;
            $exemplaires = DB::table('exemplaires')
                ->select('livre_id')
                ->whereIn('id', $exchanges)
                ->orWhere('user_id', 1)
                ->get()->toArray();
                // return $exemplaires->toArray();
            $books = DB::table('livres')->select('titre')->whereNotIn('id', $exemplaires)->get();
            return $books;
            // DB::table('exchanges')->select('desired_book')
            // ->where('name', '=', 'John')
            // ->orWhere(function($query)
            // {
            //     $query->where('votes', '>', 100)
            //           ->where('title', '<>', 'Admin');
            // })
            // ->get();
            // return DB::table('livres AS l')->select('l.*')
            // ->whereNotIn('l.id', DB::table('exemplaires AS e')
            //     ->select('e.livre_id')
            //     ->whereIn('e.id',DB::table('exchanges AS x')
            //         ->select('x.desired_book')->where(['x.user_id'=>1, 'x.status'=> 'accepted'])
            //         ->get()->toArray()
            //     )->orWhere('e.user_id',1)->get()->toArray())
            //     ->get();
        } else return response()->json(null, 204);
    }
}
