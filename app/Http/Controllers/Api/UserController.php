<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\User;

class UserController extends Controller
{
  public $successStatus = 200;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();

        return response()->json($users);
    }


    public function login(Request $request) {
        $credentials = [
           'email' => $request['email'],  // grab 'email' and 'password' from $request[] object
           'password' => $request['password']
        ];

        if(Auth::attempt($credentials)) {
           $user = Auth::user();
           $success['token'] = $user->createToken('MyApp');

           return response()->json(['success' => $success], $this->successStatus);
         }
          else {
                return response()->json(['error' => 'Unauthorized'], 401);
          }
        }

    public function register(Request $request)
    {
      $user = new User;
      $user->name = $request->input('name');
      $user->email = $request->input('email');
      $user->password = bcrypt($request->input('password'));
      $user->address = $request->input('address');
      $user->city = $request->input('city');
      $user->state = $request->input('state');
      $user->zipcode = $request->input('zipcode');
      $user->save(); // This saves doesn't need a view to return or route, just simpley saves to the User Model.

      return response()->json($user); // This returns json, and you go directly
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      // $user = new User;
      // $user->name = $request->input('name');
      // $user->email = $request->input('email');
      // $user->password = $request->input('password');
      // $user->address = $request->input('address');
      // $user->city = $request->input('city');
      // $user->state = $request->input('state');
      // $user->zipcode = $request->input('zipcode');
      // $user->save(); // This saves doesn't need a view to return or route, just simpley saves to the User Model.
      //
      // return response()->json($user); // This returns json, and you go directly
    }

    // public function postLogin(Request $request) {
    //   $request->validate([
    //     'email' => 'required|email',
    //     'password' => 'required|min:4'
    //   ]);
    //
    //   $credentials = [
    //      'email' => $request['email'],  // grab 'email' and 'password' from $request[] object
    //      'password' => $request['password'],
    //  ];
    //
    //  Auth::attempt($credentials);
    // }

   //  public function register(Request $request) {
   //            $validator = Validator::make($request->all(), [
   //            'name' => 'required',
   //            'email' => 'required|email',
   //            'password' => 'required',
   //            'c_password' => 'required|same:password',
   //        ]);
   //
   //        if($validator->fails()) {
   //            return response()->json(['error'=>$validator->errors()], 401);
   //        }
   //        $input = $request->all();
   //        $input['password'] = bcrypt($input['password']);
   //
   //        $user = User::create($input);
   //
   //        $success['token'] = $user->createToken('MyApp')->accessToken;
   //        $success['name'] = $user->name;
   //
   //        return response()->json(['success'=>$success], $this->successStatus);
   //      }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
