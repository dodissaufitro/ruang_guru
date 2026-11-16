<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LiveClassReminder extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'live_class_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function liveClass()
    {
        return $this->belongsTo(LiveClass::class);
    }
}
