<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;

Route::get('/status', function () {
    return response()->json(['status' => 'API is running']);
});

Route::post('/register', [Controller::class, 'register']);
Route::post('/login', [Controller::class, 'login']);