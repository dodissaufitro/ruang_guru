<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PracticeQuestion extends Model
{
    use HasFactory;

    protected $fillable = [
        'practice_package_id',
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

    public function practicePackage()
    {
        return $this->belongsTo(PracticePackage::class, 'practice_package_id');
    }
}
