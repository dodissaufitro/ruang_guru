<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('live_classes', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('tutor_name');
            $table->string('tutor_title')->nullable();
            $table->string('category')->default('arab'); // arab, lipia, timur_tengah
            $table->string('date_label'); // e.g. 'Hari Ini, 14 Nov 2026'
            $table->string('time_label'); // e.g. '14:00 - 15:30 WIB'
            $table->string('status')->default('upcoming'); // 'live', 'upcoming', 'recorded'
            $table->integer('participants_count')->default(0);
            $table->string('tag')->nullable();
            $table->string('image')->nullable();
            $table->string('stream_url')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });

        Schema::create('live_class_reminders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('live_class_id')->constrained('live_classes')->cascadeOnDelete();
            $table->timestamps();

            $table->unique(['user_id', 'live_class_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('live_class_reminders');
        Schema::dropIfExists('live_classes');
    }
};
