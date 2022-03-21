<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/campaigns', function () {
            return Inertia::render('Campaigns');
    })->name('campaigns');

    Route::get('/emails', function () {
        return Inertia::render('Emails');
    })->name('emails');


    require __DIR__.'/account.php';
    require __DIR__.'/package.php';

});
