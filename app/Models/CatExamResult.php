<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatExamResult extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'tryout_exam_id',
        'score',
        'correct_count',
        'total_questions',
        'time_spent_seconds',
        'is_passed',
        'user_answers',
        'flagged_questions',
        'subtest_scores',
        'completed_at',
    ];

    protected $casts = [
        'score' => 'integer',
        'correct_count' => 'integer',
        'total_questions' => 'integer',
        'time_spent_seconds' => 'integer',
        'is_passed' => 'boolean',
        'user_answers' => 'array',
        'flagged_questions' => 'array',
        'subtest_scores' => 'array',
        'completed_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tryoutExam()
    {
        return $this->belongsTo(TryoutExam::class, 'tryout_exam_id');
    }
}
