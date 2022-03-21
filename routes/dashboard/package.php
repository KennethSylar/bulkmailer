<?php

use App\Http\Controllers\Package\PackageController;
use Illuminate\Support\Facades\Route;

Route::get('manage-package', [PackageController::class, 'index'])->name('manage-package');
