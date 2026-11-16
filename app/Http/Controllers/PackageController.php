<?php

namespace App\Http\Controllers;

use App\Models\Package;
use App\Models\PackageEnrollment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class PackageController extends Controller
{
    public function index(): JsonResponse
    {
        $packages = Package::where('is_active', true)->get();
        return response()->json($packages);
    }

    public function store(Request $request): RedirectResponse|JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'category' => 'required|string|max:50',
            'tag' => 'nullable|string|max:100',
            'original_price' => 'required|numeric|min:0',
            'discount_price' => 'required|numeric|min:0',
            'monthly_price' => 'nullable|numeric|min:0',
            'period_label' => 'nullable|string|max:255',
            'features' => 'nullable|array',
            'is_popular' => 'boolean',
        ]);

        $package = Package::create($validated);

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'package' => $package], 201);
        }

        return back()->with('success', 'Paket berhasil ditambahkan.');
    }

    public function update(Request $request, Package $package): RedirectResponse|JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'category' => 'required|string|max:50',
            'tag' => 'nullable|string|max:100',
            'original_price' => 'required|numeric|min:0',
            'discount_price' => 'required|numeric|min:0',
            'monthly_price' => 'nullable|numeric|min:0',
            'period_label' => 'nullable|string|max:255',
            'features' => 'nullable|array',
            'is_popular' => 'boolean',
            'is_active' => 'boolean',
        ]);

        $package->update($validated);

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'package' => $package]);
        }

        return back()->with('success', 'Paket berhasil diperbarui.');
    }

    public function destroy(Request $request, Package $package): RedirectResponse|JsonResponse
    {
        $package->delete();

        if ($request->wantsJson()) {
            return response()->json(['success' => true]);
        }

        return back()->with('success', 'Paket berhasil dihapus.');
    }

    public function enroll(Request $request, Package $package): RedirectResponse|JsonResponse
    {
        $user = $request->user();

        $enrollment = PackageEnrollment::updateOrCreate(
            ['user_id' => $user->id, 'package_id' => $package->id],
            [
                'status' => 'active',
                'enrolled_at' => now(),
                'expires_at' => now()->addYear(),
            ]
        );

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'enrollment' => $enrollment]);
        }

        return back()->with('success', "Selamat! Anda berhasil mendaftar ke {$package->title}.");
    }
}
