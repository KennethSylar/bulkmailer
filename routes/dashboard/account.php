<?php

use App\Http\Controllers\Account\AccountController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('register', [AccountController::class, 'index'])->name('account');
