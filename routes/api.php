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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('users', 'Api\UserController');

Route::post('/users/login', 'Api\UserController@login'); // WHEN YOUR API USES A POST METHOD IN THE AJAX/AXIOS-REQUEST
// Route::post('/api/users/register', 'Api\UserController@register'); // WHEN YOUR API USES A POST METHOD IN THE AJAX/AXIOS-REQUEST
// Route::post('/users/register', 'Api\UserController@register'); // WHEN YOUR API USES A POST METHOD IN THE AJAX/AXIOS-REQUEST
Route::post('/users/register', 'Api\UserController@register'); // WHEN YOUR API USES A POST METHOD IN THE AJAX/AXIOS-REQUEST

Route::resource('favorites', 'Api\FavoritesController');
// Route::post('/favorites/store', 'Api\Favorites@store');

// Route::post('/users/register', 'Api\UserController@register'); // WHEN YOUR API USES A POST METHOD IN THE AJAX/AXIOS-REQUEST

// Route::group(['prefix' => 'user'], function() { // === '/user' prefix
//     Route::group(['middleware' => 'guest'], function() { // === Guest Middleware
//         Route::get('/signup', 'UserController@getSignup')->name('signup');
//         Route::post('/signup', 'UserController@postSignup');
//
//         Route::get('/signin', 'UserController@getSignin')->name('signin')->middleware('guest');
//         Route::post('/signin', 'UserController@postSignin')->name('signin')->middleware('guest');
//     });
//         Route::group(['middleware' => 'auth'], function() { // === Guest Middleware
//             Route::get('/profile', 'UserController@getProfile')->name('profile'); // == Auth Middleware
//             Route::get('/logout', 'UserController@getLogout')->name('logout');
//         });
// });
