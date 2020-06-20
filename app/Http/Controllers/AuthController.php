<?php

namespace App\Http\Controllers;

use App\User;
use App\Ville   ;
use Illuminate\Http\Request;
use JWTAuth;

class AuthController extends Controller
{
    public $loginAfterSignUp = true;

    public function register(Request $request)
    {
      $ville=Ville::find($request->ville);
        $user=$ville->users()->create([
          'name' => $request->name,
          'email' => $request->email,
          'password' => bcrypt($request->password),
          
        ]);
        return response()->json(['message' => 'succesfuly sign in'], 200);
    }

    public function login(Request $request)
    {
      $credentials = $request->only(['email', 'password']);
      if (!$token = JWTAuth::attempt($credentials)) {
        return response()->json(['error' => 'Invalid Email or Password'], 401);
      }
      return $this->respondWithToken($token);
    }


    public function getAuthUser(Request $request)
    {
        return response()->json(auth()->user());
    }


    public function logout()
    {
        auth()->logout();
        return response()->json(['message'=>'Successfully logged out']);
    }


    protected function respondWithToken($token)
    {
      return response()->json([
        'access_token' => $token,
        'token_type' => 'bearer',
        'user' => auth()->user(),
        'expires_in' => auth()->factory()->getTTL() * 120
      ]);
    }
}
