<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PracticePackage extends Model
{
    use HasFactory;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'title',
        'category',
        'category_label',
        'total_questions',
        'estimated_minutes',
        'level',
        'description',
        'is_active',
    ];

    protected $casts = [
        'total_questions' => 'integer',
        'estimated_minutes' => 'integer',
        'is_active' => 'boolean',
    ];

    public function questions()
    {
        return $this->hasMany(PracticeQuestion::class, 'practice_package_id')->orderBy('order_num');
    }

    public function attempts()
    {
        return $this->hasMany(PracticeAttempt::class, 'practice_package_id');
    }
}
