<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function index(): JsonResponse
    {
        $users = User::select('id', 'name', 'email', 'phone', 'role', 'created_at')
            ->orderBy('id', 'desc')
            ->get();
        return response()->json($users);
    }

    public function store(Request $request): RedirectResponse|JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'nullable|string|max:20',
            'role' => ['required', Rule::in(['superadmin', 'guru', 'siswa'])],
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'] ?? null,
            'role' => $validated['role'],
            'password' => Hash::make($validated['password']),
        ]);

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'user' => $user], 201);
        }

        return back()->with('success', "Pengguna {$user->name} berhasil ditambahkan dengan role {$user->role}.");
    }

    public function updateRole(Request $request, User $user): RedirectResponse|JsonResponse
    {
        $validated = $request->validate([
            'role' => ['required', Rule::in(['superadmin', 'guru', 'siswa'])],
        ]);

        $user->update(['role' => $validated['role']]);

        if ($request->wantsJson()) {
            return response()->json([
                'success' => true,
                'message' => "Role {$user->name} berhasil diubah menjadi {$user->role}!",
                'user' => $user,
            ]);
        }

        return back()->with('success', "Role {$user->name} berhasil diubah menjadi {$user->role}!");
    }

    public function destroy(Request $request, User $user): RedirectResponse|JsonResponse
    {
        if ($user->id === $request->user()->id) {
            if ($request->wantsJson()) {
                return response()->json(['error' => 'Anda tidak dapat menghapus akun Anda sendiri.'], 403);
            }
            return back()->withErrors(['error' => 'Anda tidak dapat menghapus akun Anda sendiri.']);
        }

        $user->delete();

        if ($request->wantsJson()) {
            return response()->json(['success' => true]);
        }

        return back()->with('success', 'Pengguna berhasil dihapus.');
    }
}
