<?php

namespace App\Http\Controllers;

use App\Models\SavedUniversity;
use App\Models\University;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UniversityController extends Controller
{
    public function index(): JsonResponse
    {
        $universities = University::all();
        return response()->json($universities);
    }

    public function show(University $university): JsonResponse
    {
        return response()->json($university);
    }

    public function store(Request $request): RedirectResponse|JsonResponse
    {
        $validated = $request->validate([
            'id' => 'nullable|string|unique:universities,id',
            'name' => 'required|string|max:255',
            'arabic_name' => 'required|string|max:255',
            'city' => 'required|string|max:100',
            'country' => 'required|string|max:100',
            'country_code' => 'required|string|max:5',
            'flag' => 'required|string|max:10',
            'scholarship_type' => 'required|string|max:100',
            'status' => 'required|string|max:100',
            'deadline' => 'nullable|string|max:100',
            'academic_year' => 'nullable|string|max:100',
            'acceptance_rate' => 'nullable|string|max:100',
            'tuition_fee' => 'nullable|string|max:100',
            'monthly_allowance' => 'nullable|string|max:100',
            'quota' => 'nullable|string|max:100',
            'is_featured' => 'boolean',
            'image' => 'nullable|string',
            'description' => 'nullable|string',
            'featured_faculties' => 'nullable|array',
            'facilities' => 'nullable|array',
            'requirements' => 'nullable|array',
            'documents' => 'nullable|array',
            'selection_stages' => 'nullable|array',
            'official_portal_url' => 'nullable|string|url',
        ]);

        if (empty($validated['id'])) {
            $validated['id'] = 'univ-' . Str::slug($validated['name']);
        }

        $univ = University::create($validated);

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'university' => $univ], 201);
        }

        return back()->with('success', 'Data universitas berhasil ditambahkan.');
    }

    public function update(Request $request, University $university): RedirectResponse|JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'arabic_name' => 'required|string|max:255',
            'city' => 'required|string|max:100',
            'country' => 'required|string|max:100',
            'country_code' => 'required|string|max:5',
            'flag' => 'required|string|max:10',
            'scholarship_type' => 'required|string|max:100',
            'status' => 'required|string|max:100',
            'deadline' => 'nullable|string|max:100',
            'academic_year' => 'nullable|string|max:100',
            'acceptance_rate' => 'nullable|string|max:100',
            'tuition_fee' => 'nullable|string|max:100',
            'monthly_allowance' => 'nullable|string|max:100',
            'quota' => 'nullable|string|max:100',
            'is_featured' => 'boolean',
            'image' => 'nullable|string',
            'description' => 'nullable|string',
            'featured_faculties' => 'nullable|array',
            'facilities' => 'nullable|array',
            'requirements' => 'nullable|array',
            'documents' => 'nullable|array',
            'selection_stages' => 'nullable|array',
            'official_portal_url' => 'nullable|string|url',
        ]);

        $university->update($validated);

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'university' => $university]);
        }

        return back()->with('success', 'Data universitas berhasil diperbarui.');
    }

    public function destroy(Request $request, University $university): RedirectResponse|JsonResponse
    {
        $university->delete();

        if ($request->wantsJson()) {
            return response()->json(['success' => true]);
        }

        return back()->with('success', 'Data universitas berhasil dihapus.');
    }

    public function toggleSave(Request $request, University $university): JsonResponse
    {
        $user = $request->user();

        $saved = SavedUniversity::where('user_id', $user->id)
            ->where('university_id', $university->id)
            ->first();

        if ($saved) {
            $saved->delete();
            $isSaved = false;
        } else {
            SavedUniversity::create([
                'user_id' => $user->id,
                'university_id' => $university->id,
            ]);
            $isSaved = true;
        }

        return response()->json([
            'success' => true,
            'is_saved' => $isSaved,
            'university_id' => $university->id,
        ]);
    }
}
