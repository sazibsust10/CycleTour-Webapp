<?php

namespace App\Http\Controllers;

use App\Place;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PlaceController extends Controller
{

    public function showAllPlaces(){

        $places = DB::table('places')
                    ->join('place_infomation', 'place_infomation.place_id', '=', 'places.id')
                    ->select(DB::raw('places.*, place_infomation.*'))
                    ->get();

        return response()->json([
            'places' => $places,
            'message' => 'Success'
        ], 200);
    }

    public function showPlaceById($id){


        $place = DB::table('places')
                    ->join('place_infomation', 'place_infomation.place_id', '=', 'places.id')
                    ->select(DB::raw('places.*, place_infomation.*'))
                    ->where('places.id', '=', $id)
                    ->first();

        return response()->json([
            'place' => $place,
            'message' => 'Success'
        ], 200);
    }
}