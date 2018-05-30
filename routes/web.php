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
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/vuetable', function () {
    return view('vuetable');
})->name('vuetable');

Route::get('/bar-chart', function () {
    return view('chart');
})->name('bar-chart');

Route::get('/tab', function () {
    return view('tab');
})->name('tab');

Route::get('/bar-chart-vuetable', function () {
    return view('bar-chart-vuetable');
})->name('bar-chart-vuetable');