<?php

use App\Http\Controllers\Account\AccountController;
use App\Http\Controllers\Billing\BillingController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('billing', [BillingController::class, 'index'])->name('billing');
Route::get('edit-billing', [BillingController::class, 'edit'])->name('edit-billing');
