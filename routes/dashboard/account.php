<?php

use App\Http\Controllers\Account\AccountController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('account', [AccountController::class, 'index'])->name('account');
