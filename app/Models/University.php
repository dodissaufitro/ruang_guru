<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class University extends Model
{
    use HasFactory;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'name',
        'arabic_name',
        'city',
        'country',
        'country_code',
        'flag',
        'scholarship_type',
        'badge_color',
        'status',
        'status_color',
        'deadline',
        'academic_year',
        'acceptance_rate',
        'tuition_fee',
        'monthly_allowance',
        'quota',
        'is_featured',
        'image',
        'description',
        'featured_faculties',
        'facilities',
        'requirements',
        'documents',
        'selection_stages',
        'official_portal_url',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'featured_faculties' => 'array',
        'facilities' => 'array',
        'requirements' => 'array',
        'documents' => 'array',
        'selection_stages' => 'array',
    ];

    public function savedByUsers()
    {
        return $this->hasMany(SavedUniversity::class, 'university_id');
    }
}
