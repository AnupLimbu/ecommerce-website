<?php

use Illuminate\Support\Facades\Route;

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
Route::group(['middleware'=>'auth'],function () {
    Route::get('/homepage', 'HomePageController@getUserHomepage');
});

Route::view('/','index')->middleware('auth');
Route::view('/addproduct','addproduct')->middleware('auth');
Route::view('/cart','cart')->middleware('auth');
Route::view('/products','products')->middleware('auth');
Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');



