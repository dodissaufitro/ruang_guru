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
        Schema::create('course_materials', function (Blueprint $table) {
            $table->string('id')->primary(); // e.g. 'arab-dasar', 'nahwu-sharaf', 'qiraah', etc.
            $table->string('title');
            $table->string('category')->default('arab'); // 'arab', 'keislaman', 'lipia'
            $table->string('image')->nullable();
            $table->integer('item_count')->default(0);
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('lessons', function (Blueprint $table) {
            $table->id();
            $table->string('course_material_id');
            $table->foreign('course_material_id')->references('id')->on('course_materials')->cascadeOnDelete();
            $table->string('title');
            $table->string('duration')->default('20 Menit');
            $table->string('video_url')->nullable();
            $table->text('content')->nullable();
            $table->integer('order_num')->default(1);
            $table->boolean('is_completed_default')->default(false);
            $table->timestamps();
        });

        Schema::create('user_lesson_progress', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('lesson_id')->constrained('lessons')->cascadeOnDelete();
            $table->boolean('is_completed')->default(true);
            $table->timestamp('completed_at')->useCurrent();
            $table->timestamps();

            $table->unique(['user_id', 'lesson_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_lesson_progress');
        Schema::dropIfExists('lessons');
        Schema::dropIfExists('course_materials');
    }
};
