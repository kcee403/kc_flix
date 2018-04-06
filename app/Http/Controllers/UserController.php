<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
  public function store(Request $request)
  {
    $user = new User;
    $user->name = $request->input('name');
    $user->email = $request->input('email');
    $user->password = $request->input('password');
    $user->address = $request->input('address');
    $user->city = $request->input('city');
    $user->state = $request->input('state');
    $user->zipcode = $request->input('zipcode');
    $user->save(); // This saves doesn't need a view to return or route, just simpley saves to the User Model.

    return response()->json($user); // This returns json, and you go directly
  }

}
