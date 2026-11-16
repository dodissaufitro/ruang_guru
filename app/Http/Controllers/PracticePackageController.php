<?php

namespace App\Http\Controllers;

use App\Models\PracticeAttempt;
use App\Models\PracticePackage;
use App\Models\PracticeQuestion;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PracticePackageController extends Controller
{
    public function index(): JsonResponse
    {
        $packages = PracticePackage::with('questions')->where('is_active', true)->get();
        return response()->json($packages);
    }

    public function show(PracticePackage $practicePackage): JsonResponse
    {
        return response()->json($practicePackage->load('questions'));
    }

    public function store(Request $request): RedirectResponse|JsonResponse
    {
        $validated = $request->validate([
            'id' => 'nullable|string|unique:practice_packages,id',
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:50',
            'category_label' => 'required|string|max:100',
            'total_questions' => 'nullable|integer',
            'estimated_minutes' => 'required|integer|min:1',
            'level' => 'required|string|in:Mudah,Sedang,Sulit',
            'description' => 'nullable|string',
        ]);

        if (empty($validated['id'])) {
            $validated['id'] = 'paket-' . Str::slug($validated['title']) . '-' . rand(100, 999);
        }

        $package = PracticePackage::create($validated);

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'package' => $package], 201);
        }

        return back()->with('success', 'Paket latihan soal berhasil dibuat.');
    }

    public function update(Request $request, PracticePackage $practicePackage): RedirectResponse|JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:50',
            'category_label' => 'required|string|max:100',
            'total_questions' => 'nullable|integer',
            'estimated_minutes' => 'required|integer|min:1',
            'level' => 'required|string|in:Mudah,Sedang,Sulit',
            'description' => 'nullable|string',
            'is_active' => 'boolean',
        ]);

        $practicePackage->update($validated);

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'package' => $practicePackage]);
        }

        return back()->with('success', 'Paket latihan soal berhasil diperbarui.');
    }

    public function destroy(Request $request, PracticePackage $practicePackage): RedirectResponse|JsonResponse
    {
        $practicePackage->delete();

        if ($request->wantsJson()) {
            return response()->json(['success' => true]);
        }

        return back()->with('success', 'Paket latihan soal berhasil dihapus.');
    }

    public function submitAttempt(Request $request, PracticePackage $practicePackage): JsonResponse
    {
        $user = $request->user();
        $answers = $request->input('answers', []); // {questionId: 'A'}

        $questions = $practicePackage->questions;
        $correctCount = 0;
        $totalQuestions = $questions->count();

        foreach ($questions as $q) {
            $userAns = $answers[$q->id] ?? null;
            if ($userAns && strtoupper($userAns) === strtoupper($q->correct_answer)) {
                $correctCount++;
            }
        }

        $score = $totalQuestions > 0 ? (int) round(($correctCount / $totalQuestions) * 100) : 0;

        $attempt = PracticeAttempt::create([
            'user_id' => $user->id,
            'practice_package_id' => $practicePackage->id,
            'score' => $score,
            'correct_count' => $correctCount,
            'total_count' => $totalQuestions,
            'user_answers' => $answers,
            'completed_at' => now(),
        ]);

        return response()->json([
            'success' => true,
            'score' => $score,
            'correct_count' => $correctCount,
            'total_count' => $totalQuestions,
            'attempt_id' => $attempt->id,
        ]);
    }
}
