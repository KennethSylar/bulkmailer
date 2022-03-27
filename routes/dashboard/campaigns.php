<?php

use App\Http\Controllers\Campaign\CampaignController;
use Illuminate\Support\Facades\Route;


Route::get('campaigns', [CampaignController::class, 'index'])->name('campaigns');
Route::get('new-campaign', [CampaignController::class, 'newCampaign'])->name('new-campaign');
Route::post('create-campaign', [CampaignController::class, 'store'])->name('create-campaign');
