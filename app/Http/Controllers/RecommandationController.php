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
            // DB::table('livres')
            //     ->join('exemplaires', 'livres.id', '!=', 'exemplaires.livre_id')
            //     ->join('exchanges', 'exemplaires.id', '=', 'exchanges.desired_book')
            //     ->where('exchanges.user_id', auth()->user()->id)
            //     ->select('livres.*')
            //     ->get();
        }
    }
}
