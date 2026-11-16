<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'subtitle',
        'category',
        'tag',
        'tag_color',
        'original_price',
        'discount_price',
        'monthly_price',
        'period_label',
        'features',
        'rating',
        'image',
        'is_popular',
        'is_active',
    ];

    protected $casts = [
        'features' => 'array',
        'is_popular' => 'boolean',
        'is_active' => 'boolean',
        'original_price' => 'float',
        'discount_price' => 'float',
        'monthly_price' => 'float',
        'rating' => 'float',
    ];

    public function enrollments()
    {
        return $this->hasMany(PackageEnrollment::class);
    }
}
