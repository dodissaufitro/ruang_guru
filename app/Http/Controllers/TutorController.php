<?php

namespace App\Http\Controllers;

use App\Models\Tutor;
use App\Models\TutorBooking;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TutorController extends Controller
{
    public function index(): JsonResponse
    {
        $tutors = Tutor::where('is_available', true)->get();
        return response()->json($tutors);
    }

    public function show(Tutor $tutor): JsonResponse
    {
        return response()->json($tutor);
    }

    public function store(Request $request): RedirectResponse|JsonResponse
    {
        $validated = $request->validate([
            'id' => 'nullable|string|unique:tutors,id',
            'name' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'university' => 'required|string|max:255',
            'avatar' => 'nullable|string',
            'specialties' => 'required|array',
            'hourly_rate' => 'required|numeric|min:0',
            'bio' => 'nullable|string',
        ]);

        if (empty($validated['id'])) {
            $validated['id'] = 'tutor-' . Str::slug($validated['name']) . '-' . rand(10, 99);
        }

        $tutor = Tutor::create($validated);

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'tutor' => $tutor], 201);
        }

        return back()->with('success', 'Data Tutor berhasil ditambahkan.');
    }

    public function update(Request $request, Tutor $tutor): RedirectResponse|JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'university' => 'required|string|max:255',
            'avatar' => 'nullable|string',
            'specialties' => 'required|array',
            'hourly_rate' => 'required|numeric|min:0',
            'bio' => 'nullable|string',
            'is_available' => 'boolean',
        ]);

        $tutor->update($validated);

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'tutor' => $tutor]);
        }

        return back()->with('success', 'Data Tutor berhasil diperbarui.');
    }

    public function destroy(Request $request, Tutor $tutor): RedirectResponse|JsonResponse
    {
        $tutor->delete();

        if ($request->wantsJson()) {
            return response()->json(['success' => true]);
        }

        return back()->with('success', 'Data Tutor berhasil dihapus.');
    }

    public function book(Request $request, Tutor $tutor): RedirectResponse|JsonResponse
    {
        $user = $request->user();

        $validated = $request->validate([
            'service_type' => 'required|string|in:chat,videocall,berkas',
            'booking_date' => 'required|string|max:100',
            'booking_time' => 'required|string|max:100',
            'note' => 'nullable|string',
        ]);

        $booking = TutorBooking::create([
            'user_id' => $user->id,
            'tutor_id' => $tutor->id,
            'service_type' => $validated['service_type'],
            'booking_date' => $validated['booking_date'],
            'booking_time' => $validated['booking_time'],
            'note' => $validated['note'] ?? null,
            'status' => 'confirmed',
        ]);

        $tutor->increment('students_count');

        if ($request->wantsJson()) {
            return response()->json([
                'success' => true,
                'message' => "Jadwal konsultasi bersama {$tutor->name} berhasil dikonfirmasi!",
                'booking' => $booking,
            ]);
        }

        return back()->with('success', "Jadwal konsultasi bersama {$tutor->name} berhasil dikonfirmasi!");
    }
}
