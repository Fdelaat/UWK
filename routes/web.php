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

Auth::routes(['verify' => true]);

Route::get('/', 'HomeController@index')->name('home');
Route::get('/bedrijven', 'Contacts\contactCompanyController@getView')->name('bedrijven.index');
Route::get('/contactpersonen', 'Contacts\contactPersonController@getView')->name('contactpersonen.index');
Route::get('/productgroepen', 'Contacts\ProductgroupController@getView')->name('productgroepen.index');
Route::get('/projecten', 'ProjectController@getView')->name('projecten.index');

Route::group(['prefix' => 'admin'], function ()
{
    Route::get('/', 'Admin\dashboardController@index')->name('admin.index');
    Route::post('/update', 'Admin\dashboardController@update')->name('admin.update');
    Route::delete('/users/{user}', 'Admin\dashboardController@destroy')->name('admin.delete');
    Route::get('/users/export/', 'Admin\dashboardController@export');
    Route::get('/oauth', 'Admin\dashboardController@oauth')->name('admin.oauth');
});
