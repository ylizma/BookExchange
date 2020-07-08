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
            $books = DB::table('livres')->select('id', 'nbrpage', 'categorie_id')->whereNotIn('id', json_decode(json_encode($exemplaires), true))->get();
            $userLastBook = Exchange::where('user_id', 1)->with('desiredbook.livre')->get()->toArray();
            $calculatedDistances =  $this->booksDistances($books, $userLastBook);
            $sortedBooks = $this->sortBooksByDistance($calculatedDistances);
            $booksIds = $this->get4BooksIds($sortedBooks);
            return $this->get4books($booksIds);
        } else return response()->json(null, 204);
    }

    function booksDistances($books, $userLastBook)
    {
        $count = 0;
        $cbooks = array();
        $distance = 0;
        // dd($userLastBook[0]);
        foreach (json_decode($books, true) as $book => $value) {
            $distance = $this->distanceWithUserBook($value, $userLastBook[0]);
            $cbooks[] = array(
                "id" => $value['id'],
                "distance" => $distance
            );
        }
        return $cbooks;
    }

    function distanceWithUserBook($book, $userLastBook)
    {
        $dist = sqrt(pow(($book['nbrpage'] - $userLastBook['desiredbook']['livre']['nbrpage']), 2) + pow(($book['categorie_id'] - $userLastBook['desiredbook']['livre']['categorie_id']), 2));
        return $dist;
    }

    function sortBooksByDistance($books)
    {
        // dd($books);
        for ($i = 0; $i < sizeof($books); $i++) {
            for ($j = $i + 1; $j < sizeof($books); $j++) {
                if ($books[$i]['distance'] > $books[$j]['distance']) {
                    $tmp = $books[$i];
                    $books[$i] = $books[$j];
                    $books[$j] = $tmp;
                }
            }
        }
        return $books;
    }

    function get4BooksIds($books)
    {
        $ids = array();
        for ($i=0; $i < 4; $i++) { 
            $ids[] = $books[$i]['id'];
        }
        return $ids;
    }

    function get4books($ids){
        $books = Exemplaire::whereIn('livre_id',$ids)->get();
        return  ($books);
    }
}
