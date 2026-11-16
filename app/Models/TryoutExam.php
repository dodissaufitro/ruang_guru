<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TryoutExam extends Model
{
    use HasFactory;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'code',
        'title',
        'target_campus',
        'total_questions',
        'duration_minutes',
        'passing_grade_score',
        'participants_count',
        'subtests',
        'status',
        'description',
    ];

    protected $casts = [
        'total_questions' => 'integer',
        'duration_minutes' => 'integer',
        'passing_grade_score' => 'integer',
        'participants_count' => 'integer',
        'subtests' => 'array',
    ];

    public function questions()
    {
        return $this->hasMany(CatQuestion::class, 'tryout_exam_id')->orderBy('order_num');
    }

    public function results()
    {
        return $this->hasMany(CatExamResult::class, 'tryout_exam_id');
    }
}
