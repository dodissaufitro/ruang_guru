<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PracticeAttempt extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'practice_package_id',
        'score',
        'correct_count',
        'total_count',
        'user_answers',
        'completed_at',
    ];

    protected $casts = [
        'score' => 'integer',
        'correct_count' => 'integer',
        'total_count' => 'integer',
        'user_answers' => 'array',
        'completed_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function practicePackage()
    {
        return $this->belongsTo(PracticePackage::class, 'practice_package_id');
    }
}
