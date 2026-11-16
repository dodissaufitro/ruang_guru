<?php

namespace App\Http\Controllers;

use App\Models\CatExamResult;
use App\Models\CatQuestion;
use App\Models\TryoutExam;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TryoutExamController extends Controller
{
    public function index(): JsonResponse
    {
        $exams = TryoutExam::with('questions')->get();
        return response()->json($exams);
    }

    public function show(TryoutExam $tryoutExam): JsonResponse
    {
        return response()->json($tryoutExam->load('questions'));
    }

    public function store(Request $request): RedirectResponse|JsonResponse
    {
        $validated = $request->validate([
            'id' => 'nullable|string|unique:tryout_exams,id',
            'code' => 'required|string|unique:tryout_exams,code',
            'title' => 'required|string|max:255',
            'target_campus' => 'required|string|max:255',
            'total_questions' => 'nullable|integer',
            'duration_minutes' => 'required|integer|min:10',
            'passing_grade_score' => 'required|integer|min:100',
            'subtests' => 'nullable|array',
            'status' => 'required|string|in:open,upcoming,closed',
            'description' => 'nullable|string',
        ]);

        if (empty($validated['id'])) {
            $validated['id'] = 'to-' . Str::slug($validated['code']);
        }

        $exam = TryoutExam::create($validated);

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'exam' => $exam], 201);
        }

        return back()->with('success', 'Paket Try Out CAT berhasil dibuat.');
    }

    public function update(Request $request, TryoutExam $tryoutExam): RedirectResponse|JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'target_campus' => 'required|string|max:255',
            'duration_minutes' => 'required|integer|min:10',
            'passing_grade_score' => 'required|integer|min:100',
            'subtests' => 'nullable|array',
            'status' => 'required|string|in:open,upcoming,closed',
            'description' => 'nullable|string',
        ]);

        $tryoutExam->update($validated);

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'exam' => $tryoutExam]);
        }

        return back()->with('success', 'Paket Try Out CAT berhasil diperbarui.');
    }

    public function destroy(Request $request, TryoutExam $tryoutExam): RedirectResponse|JsonResponse
    {
        $tryoutExam->delete();

        if ($request->wantsJson()) {
            return response()->json(['success' => true]);
        }

        return back()->with('success', 'Paket Try Out CAT berhasil dihapus.');
    }

    public function submitCatExam(Request $request, TryoutExam $tryoutExam): JsonResponse
    {
        $user = $request->user();
        $answers = $request->input('answers', []); // {questionId: 'A'}
        $flagged = $request->input('flagged', []);
        $timeSpentSeconds = (int) $request->input('time_spent_seconds', 0);

        $questions = $tryoutExam->questions;
        $correctCount = 0;
        $totalQuestions = $questions->count();

        foreach ($questions as $q) {
            $userAns = $answers[$q->id] ?? null;
            if ($userAns && strtoupper($userAns) === strtoupper($q->correct_answer)) {
                $correctCount++;
            }
        }

        // CAT IRT Scale score calculation (500 base + 450 proportional)
        $score = $totalQuestions > 0 ? (int) round(500 + ($correctCount / $totalQuestions) * 450) : 500;
        $isPassed = $score >= $tryoutExam->passing_grade_score;

        $result = CatExamResult::create([
            'user_id' => $user->id,
            'tryout_exam_id' => $tryoutExam->id,
            'score' => $score,
            'correct_count' => $correctCount,
            'total_questions' => $totalQuestions,
            'time_spent_seconds' => $timeSpentSeconds,
            'is_passed' => $isPassed,
            'user_answers' => $answers,
            'flagged_questions' => $flagged,
            'completed_at' => now(),
        ]);

        // Increment participants
        $tryoutExam->increment('participants_count');

        return response()->json([
            'success' => true,
            'score' => $score,
            'correct_count' => $correctCount,
            'total_questions' => $totalQuestions,
            'is_passed' => $isPassed,
            'result_id' => $result->id,
        ]);
    }
}
