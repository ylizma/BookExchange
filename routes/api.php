<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', 'AuthController@register');
Route::post('login', 'AuthController@login');
Route::get('city','VilleController@index');
Route::get('city/{id}','VilleController@show');
Route::get('city/find/{s}','VilleController@find');


Route::group(['middleware' => ['jwt.auth']], function() {
    Route::get('user', 'AuthController@getAuthUser');
    Route::get('logout', 'AuthController@logout');
    Route::resource('rec','RecommandationUserController');

    // test
    Route::get('profile','UserController@myprofile');
    Route::get('books','UserController@mybooks');
    Route::post('infos','UserController@update');
});



Route::apiResource('livres', 'LivreController');
Route::apiResource('exemplaires', 'ExemplaireController');
