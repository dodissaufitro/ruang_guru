<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatQuestion extends Model
{
    use HasFactory;

    protected $fillable = [
        'tryout_exam_id',
        'subtest',
        'prompt_text',
        'arabic_text',
        'passage_text',
        'options',
        'correct_answer',
        'explanation',
        'order_num',
    ];

    protected $casts = [
        'options' => 'array',
        'order_num' => 'integer',
    ];

    public function tryoutExam()
    {
        return $this->belongsTo(TryoutExam::class, 'tryout_exam_id');
    }
}
