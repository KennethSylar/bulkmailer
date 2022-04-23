<?php

use App\Http\Controllers\Campaign\CampaignController;
use App\Http\Controllers\ContactList\ContactListController;
use Illuminate\Support\Facades\Route;


Route::get('contact-list', [ContactListController::class, 'index'])->name('contact-list');
Route::get('new-contact-list', [ContactListController::class, 'new'])->name('new-contact-list');
Route::get('view-contact-list/{id}', [ContactListController::class, 'view'])->name('view-contact-list');
Route::post('create-contact-list', [ContactListController::class, 'add'])->name('create-contact-list');
