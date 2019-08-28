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

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function () {

    Route::get('/bedrijven', 'Contacts\contactCompanyController@index');
    Route::post('/bedrijven', 'Contacts\contactCompanyController@store');
    Route::patch('/bedrijven/{id}', 'Contacts\contactCompanyController@update');
    Route::delete('/bedrijven/{id}', 'Contacts\contactCompanyController@destroy');
    Route::get('/bedrijven/namen', 'Contacts\contactCompanyController@name');
    Route::get('/bedrijven/search', 'Contacts\contactCompanyController@search');

    Route::get('/contactpersonen', 'Contacts\contactPersonController@index');
    Route::post('/contactpersonen', 'Contacts\contactPersonController@store');
    Route::patch('/contactpersonen/{id}', 'Contacts\contactPersonController@update');
    Route::delete('/contactpersonen/{id}', 'Contacts\contactPersonController@destroy');
    Route::get('/contactpersonen/search', 'Contacts\contactPersonController@search');

    Route::get('/productgroepen', 'Contacts\ProductgroupController@index');
    Route::post('/productgroepen', 'Contacts\ProductgroupController@store');
    Route::patch('/productgroepen/{id}', 'Contacts\ProductgroupController@update');
    Route::delete('/productgroepen/{id}', 'Contacts\ProductgroupController@destroy');
    Route::get('/productgroepen/search', 'Contacts\ProductgroupController@search');

    Route::get('/projecten', 'ProjectController@index');
    Route::post('/projecten', 'ProjectController@store');
    Route::patch('/projecten/{id}', 'ProjectController@update');
    Route::delete('/projecten/{id}', 'ProjectController@destroy');

});
