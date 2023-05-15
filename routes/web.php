<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PromotionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
});

Route::get('/promotions', [PromotionController::class, 'index'])->middleware(['auth', 'verified'])->name('promotions');

require __DIR__.'/auth.php';
