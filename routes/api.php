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



Route::group(['middleware' => ['jwt.auth']], function() {
    Route::get('city/{id}','VilleController@show');
    Route::get('city/find/{s}','VilleController@find');
    Route::get('user', 'AuthController@getAuthUser');
    Route::get('logout', 'AuthController@logout');
    Route::resource('rec','RecommandationUserController');

    // test
    Route::get('profile','UserController@myprofile');
    Route::get('books','UserController@mybooks');
    Route::post('update','UserController@update');
    Route::get('archived_books','UserController@archived_books');

    Route::apiResource('exemp', 'ExemplaireController');
    Route::get('user_books','ExemplaireController@user_books');


    Route::post('exchange','ExchangeController@exchange');
    Route::post('accept','ExchangeController@accept');
    Route::post('refuse','ExchangeController@refuse');

    //Notifications
    Route::get('notification/index','NotificationController@index');
    Route::patch('notification/update','NotificationController@update');
});



Route::get('myrequests','UserController@bookRequests');
Route::apiResource('cats','CategorieController');
Route::apiResource('livres', 'LivreController');
Route::get('home','HomeController@index');
Route::get('search','HomeController@search');
