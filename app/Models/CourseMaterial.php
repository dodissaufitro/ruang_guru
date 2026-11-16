<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseMaterial extends Model
{
    use HasFactory;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'title',
        'category',
        'image',
        'item_count',
        'description',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'item_count' => 'integer',
    ];

    public function lessons()
    {
        return $this->hasMany(Lesson::class, 'course_material_id')->orderBy('order_num');
    }
}
