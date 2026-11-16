<?php

namespace App\Http\Controllers;

use App\Models\LiveClass;
use App\Models\LiveClassReminder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class LiveClassController extends Controller
{
    public function index(): JsonResponse
    {
        $classes = LiveClass::all();
        return response()->json($classes);
    }

    public function store(Request $request): RedirectResponse|JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'tutor_name' => 'required|string|max:255',
            'tutor_title' => 'nullable|string|max:255',
            'category' => 'required|string|in:arab,lipia,timur_tengah',
            'date_label' => 'required|string|max:100',
            'time_label' => 'required|string|max:100',
            'status' => 'required|string|in:live,upcoming,recorded',
            'tag' => 'nullable|string|max:100',
            'image' => 'nullable|string',
            'stream_url' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        $liveClass = LiveClass::create($validated);

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'live_class' => $liveClass], 201);
        }

        return back()->with('success', 'Sesi Live Class berhasil dijadwalkan.');
    }

    public function update(Request $request, LiveClass $liveClass): RedirectResponse|JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'tutor_name' => 'required|string|max:255',
            'tutor_title' => 'nullable|string|max:255',
            'category' => 'required|string|in:arab,lipia,timur_tengah',
            'date_label' => 'required|string|max:100',
            'time_label' => 'required|string|max:100',
            'status' => 'required|string|in:live,upcoming,recorded',
            'tag' => 'nullable|string|max:100',
            'image' => 'nullable|string',
            'stream_url' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        $liveClass->update($validated);

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'live_class' => $liveClass]);
        }

        return back()->with('success', 'Sesi Live Class berhasil diperbarui.');
    }

    public function destroy(Request $request, LiveClass $liveClass): RedirectResponse|JsonResponse
    {
        $liveClass->delete();

        if ($request->wantsJson()) {
            return response()->json(['success' => true]);
        }

        return back()->with('success', 'Sesi Live Class berhasil dihapus.');
    }

    public function toggleReminder(Request $request, LiveClass $liveClass): JsonResponse
    {
        $user = $request->user();

        $reminder = LiveClassReminder::where('user_id', $user->id)
            ->where('live_class_id', $liveClass->id)
            ->first();

        if ($reminder) {
            $reminder->delete();
            $hasReminder = false;
        } else {
            LiveClassReminder::create([
                'user_id' => $user->id,
                'live_class_id' => $liveClass->id,
            ]);
            $hasReminder = true;
        }

        return response()->json([
            'success' => true,
            'has_reminder' => $hasReminder,
            'live_class_id' => $liveClass->id,
        ]);
    }
}
