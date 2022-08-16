<?php

use App\Http\Controllers\AgencyController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BoatController;
use App\Http\Controllers\FlagController;
use App\Http\Controllers\LineController;
use App\Http\Controllers\PortController;
use App\Http\Controllers\RegisteredPortController;
use App\Http\Controllers\TugboatController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('api')->prefix('auth')->controller(AuthController::class)->group(function(){
    Route::post('login','login');
    Route::post('logout','logout');
    Route::post('refresh','refresh');
    Route::post('me','me');
    Route::post('register','register');
});

Route::apiResources([
    'boat'   => BoatController::class,
    'agency'   => AgencyController::class,
    'line'   => LineController::class,
    'port'   => PortController::class,
    'registered-port'   => RegisteredPortController::class,
    'flag'   => FlagController::class,
    'tugboat'   => TugboatController::class,


]);


