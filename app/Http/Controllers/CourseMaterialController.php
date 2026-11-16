<?php

namespace App\Http\Controllers;

use App\Models\CourseMaterial;
use App\Models\Lesson;
use App\Models\UserLessonProgress;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CourseMaterialController extends Controller
{
    public function index(): JsonResponse
    {
        $courses = CourseMaterial::with('lessons')->where('is_active', true)->get();
        return response()->json($courses);
    }

    public function store(Request $request): RedirectResponse|JsonResponse
    {
        $validated = $request->validate([
            'id' => 'nullable|string|unique:course_materials,id',
            'title' => 'required|string|max:255',
            'category' => 'required|string|in:arab,keislaman,lipia',
            'image' => 'nullable|string',
            'item_count' => 'nullable|integer',
            'description' => 'nullable|string',
        ]);

        if (empty($validated['id'])) {
            $validated['id'] = Str::slug($validated['title']) . '-' . rand(100, 999);
        }

        $course = CourseMaterial::create($validated);

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'course' => $course], 201);
        }

        return back()->with('success', 'Materi pembelajaran berhasil ditambahkan.');
    }

    public function update(Request $request, CourseMaterial $courseMaterial): RedirectResponse|JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|in:arab,keislaman,lipia',
            'image' => 'nullable|string',
            'item_count' => 'nullable|integer',
            'description' => 'nullable|string',
            'is_active' => 'boolean',
        ]);

        $courseMaterial->update($validated);

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'course' => $courseMaterial]);
        }

        return back()->with('success', 'Materi pembelajaran berhasil diperbarui.');
    }

    public function destroy(Request $request, CourseMaterial $courseMaterial): RedirectResponse|JsonResponse
    {
        $courseMaterial->delete();

        if ($request->wantsJson()) {
            return response()->json(['success' => true]);
        }

        return back()->with('success', 'Materi pembelajaran berhasil dihapus.');
    }

    public function toggleLessonProgress(Request $request, Lesson $lesson): JsonResponse
    {
        $user = $request->user();

        $progress = UserLessonProgress::where('user_id', $user->id)
            ->where('lesson_id', $lesson->id)
            ->first();

        if ($progress) {
            $progress->is_completed = !$progress->is_completed;
            $progress->completed_at = $progress->is_completed ? now() : null;
            $progress->save();
        } else {
            $progress = UserLessonProgress::create([
                'user_id' => $user->id,
                'lesson_id' => $lesson->id,
                'is_completed' => true,
                'completed_at' => now(),
            ]);
        }

        return response()->json([
            'success' => true,
            'is_completed' => $progress->is_completed,
            'lesson_id' => $lesson->id,
        ]);
    }
}
