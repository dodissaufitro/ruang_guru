<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TutorBooking extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'tutor_id',
        'service_type',
        'booking_date',
        'booking_time',
        'note',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tutor()
    {
        return $this->belongsTo(Tutor::class, 'tutor_id');
    }
}
