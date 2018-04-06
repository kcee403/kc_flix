<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController.php extends Controller
{
    public function accessToken(Request $request) {
           $validate = $this->validations($request,"login");

           if($validate["error"]) {
               return $this->prepareResult(false, [], $validate['errors'],"Error while validating user");
           }

           $user = User::where("email",$request->email)->first();

           if($user) {

               if (Hash::check($request->password,$user->password)) {
                   return $this->prepareResult(true, ["accessToken" => $user->createToken('Todo App')->accessToken], [],"User Verified");
               }
                else {
                       return $this->prepareResult(false, [], ["password" => "Wrong passowrd"],"Password not matched");  
                 }
           }
            else {
                   return $this->prepareResult(false, [], ["email" => "Unable to find user"],"User not found");
            }
    }



  Next, I will create a function through which a user can get,create,update and delete todo items.



     /**

      * Get a validator for an incoming Todo request.

      *

      * @param  \Illuminate\Http\Request  $request

      * @param  $type

      * @return \Illuminate\Contracts\Validation\Validator

      */

     public function validations($request,$type){
         $errors = [ ];
         $error = false;

         if($type == "login"){

             $validator = Validator::make($request->all(), [ 'email' => 'required|email|max:255',
                                                          'password' => 'required', ]);

             if($validator->fails()){
                 $error = true;
                 $errors = $validator->errors();
             }
         }

         return ["error" => $error,"errors"=>$errors];
     }

}
