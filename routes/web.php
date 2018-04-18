<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('root');
});

Route::get('/token', function () {
    return Auth::user()->createToken('MyApp');
});
Route::resource('users', 'UserController');

// Route::post('favorites', ['as' => 'favorites.store', function() 
// {
//     Auth::user()->favorites()->attach(Input::get('post-id'));
// }]);

Auth::routes();

// Route::post('/favorites/store', 'FavoritesController@store');
// Route::get('/favorites/', 'FavoritesController@store');
