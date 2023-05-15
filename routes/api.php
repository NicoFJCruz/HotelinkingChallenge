<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\CodePromotion;
use App\Models\Promotion;
use App\Http\Controllers\CodePromotionController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/promotions/{id}', [CodePromotionController::class, 'generateCode']);

Route::get('/codepromotions/{id}',  [CodePromotionController::class, 'findCode']);

Route::put('/codepromotions/{id}',  [CodePromotionController::class, 'activateCode']);

Route::get('/promotions', function (Request $request) {
    $promotions = Promotion::all();
    return response($promotions);
});