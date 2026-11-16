<?php

use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\CourseMaterialController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LiveClassController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\PracticePackageController;
use App\Http\Controllers\TryoutExamController;
use App\Http\Controllers\TutorController;
use App\Http\Controllers\UniversityController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth'])->group(function () {
    // 1. Dashboard View with all Models & Data
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // 2. Paket Populer CRUD & Enrollment
    Route::apiResource('packages', PackageController::class);
    Route::post('packages/{package}/enroll', [PackageController::class, 'enroll'])->name('packages.enroll');

    // 3. Materi Pembelajaran & Lesson Progress CRUD
    Route::apiResource('courses', CourseMaterialController::class);
    Route::post('lessons/{lesson}/toggle-progress', [CourseMaterialController::class, 'toggleLessonProgress'])->name('lessons.toggle-progress');

    // 4. Latihan Soal & Quiz Attempts CRUD
    Route::apiResource('practice-packages', PracticePackageController::class);
    Route::post('practice-packages/{practicePackage}/submit', [PracticePackageController::class, 'submitAttempt'])->name('practice-packages.submit');

    // 5. Try Out & CAT Examination Simulation CRUD
    Route::apiResource('tryouts', TryoutExamController::class);
    Route::post('tryouts/{tryoutExam}/submit-cat', [TryoutExamController::class, 'submitCatExam'])->name('tryouts.submit-cat');

    // 6. Live Class CRUD & Reminders
    Route::apiResource('live-classes', LiveClassController::class);
    Route::post('live-classes/{liveClass}/toggle-reminder', [LiveClassController::class, 'toggleReminder'])->name('live-classes.toggle-reminder');

    // 7. Tutor & Consultation Booking CRUD
    Route::apiResource('tutors', TutorController::class);
    Route::post('tutors/{tutor}/book', [TutorController::class, 'book'])->name('tutors.book');

    // 8. Universitas & Bookmark CRUD
    Route::apiResource('universities', UniversityController::class);
    Route::post('universities/{university}/toggle-save', [UniversityController::class, 'toggleSave'])->name('universities.toggle-save');

    // 9. Super Admin User & Role Management CRUD
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::apiResource('users', AdminUserController::class);
        Route::patch('users/{user}/role', [AdminUserController::class, 'updateRole'])->name('users.update-role');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
