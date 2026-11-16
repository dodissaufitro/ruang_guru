<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tutor extends Model
{
    use HasFactory;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'name',
        'title',
        'university',
        'avatar',
        'specialties',
        'rating',
        'review_count',
        'students_count',
        'hourly_rate',
        'bio',
        'is_available',
    ];

    protected $casts = [
        'specialties' => 'array',
        'rating' => 'float',
        'review_count' => 'integer',
        'students_count' => 'integer',
        'hourly_rate' => 'float',
        'is_available' => 'boolean',
    ];

    public function bookings()
    {
        return $this->hasMany(TutorBooking::class, 'tutor_id');
    }
}
