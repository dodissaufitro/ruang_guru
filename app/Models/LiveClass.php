<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LiveClass extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'tutor_name',
        'tutor_title',
        'category',
        'date_label',
        'time_label',
        'status',
        'participants_count',
        'tag',
        'image',
        'stream_url',
        'description',
    ];

    protected $casts = [
        'participants_count' => 'integer',
    ];

    public function reminders()
    {
        return $this->hasMany(LiveClassReminder::class);
    }
}
