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
                ->whereIn('id', json_decode(json_encode($exchanges), true))
                ->orWhere('user_id', 1)
                ->get()->toArray();
            $books = DB::table('livres')->select('id','nbrpage','categorie_id')->whereNotIn('id', json_decode(json_encode($exemplaires), true))->get();
            $userLastBook = Exchange::where('user_id',1)->with('desiredbook.livre')->get();
            return $this->booksDistances($books,$userLastBook);
            return $books;

        } else return response()->json(null, 204);
    }
    function booksDistances($books,$userLastBook){
        $count = 0;
        $cbooks = array();
        $distance = 0;
        foreach (json_decode($books) as $book => $value) {
            $distance = $this->distanceWithUserBook($value,$userLastBook);
        }
        // die($distance);
        return $distance;
    }
    function distanceWithUserBook($book,$userLastBook){
        $dist = sqrt(pow(($book['nbrpage']-$userLastBook['nbrpage']),2)+pow(($book['categorie_id']-$userLastBook['nbrpage']),2));
        return $dist;
    }
}
