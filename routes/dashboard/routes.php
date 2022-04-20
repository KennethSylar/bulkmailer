<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');



    require __DIR__.'/account.php';
    require __DIR__.'/billing.php';
    require __DIR__.'/package.php';
    require __DIR__.'/campaigns.php';
    require __DIR__.'/contact-list.php';
    require __DIR__.'/email-templates.php';

});
