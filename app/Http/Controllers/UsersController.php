<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function Index()
    {
        try {
            $users = User::orderBy('id', 'asc')->whereRaw('MOD(id, 2) = 0')->get();
            return response()->json(['status' => true, 'data' => $users], 200);
        } catch (QueryException $e) {
            // Handle the database query exception here
            // You can log the error or send an error response to the client
            return response()->json(['status' => false, 'error' => 'Database error'], 500);
        } catch (\Exception $e) {
            // Handle other general exceptions here
            // This will catch any other exception that is not a QueryException
            return response()->json(['status' => false, 'error' => 'Unexpected error'], 500);
        }
    }
}
