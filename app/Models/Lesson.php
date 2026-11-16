<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_material_id',
        'title',
        'duration',
        'video_url',
        'content',
        'order_num',
        'is_completed_default',
    ];

    protected $casts = [
        'is_completed_default' => 'boolean',
        'order_num' => 'integer',
    ];

    public function courseMaterial()
    {
        return $this->belongsTo(CourseMaterial::class, 'course_material_id');
    }

    public function userProgress()
    {
        return $this->hasMany(UserLessonProgress::class);
    }
}
