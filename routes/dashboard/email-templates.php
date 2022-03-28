<?php

use App\Http\Controllers\EmailTemplates\EmailTemplateController;
use Illuminate\Support\Facades\Route;

Route::get('emails', [EmailTemplateController::class, 'index'])->name('emails');
Route::get('new-email-template', [EmailTemplateController::class, 'create'])->name('new-email-template');
