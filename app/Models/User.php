<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'phone',
        'learning_goal',
        'avatar',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function isSuperAdmin(): bool
    {
        return $this->role === 'superadmin';
    }

    public function isSiswa(): bool
    {
        return $this->role === 'siswa';
    }

    public function enrollments()
    {
        return $this->hasMany(PackageEnrollment::class);
    }

    public function lessonProgress()
    {
        return $this->hasMany(UserLessonProgress::class);
    }

    public function practiceAttempts()
    {
        return $this->hasMany(PracticeAttempt::class);
    }

    public function catExamResults()
    {
        return $this->hasMany(CatExamResult::class);
    }

    public function liveClassReminders()
    {
        return $this->hasMany(LiveClassReminder::class);
    }

    public function tutorBookings()
    {
        return $this->hasMany(TutorBooking::class);
    }

    public function savedUniversities()
    {
        return $this->hasMany(SavedUniversity::class);
    }
}
