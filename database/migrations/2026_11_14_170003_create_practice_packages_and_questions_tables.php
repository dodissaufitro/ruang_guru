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
        Schema::create('practice_packages', function (Blueprint $table) {
            $table->string('id')->primary(); // e.g. 'paket-nahwu-1', 'paket-qiraah-1'
            $table->string('title');
            $table->string('category')->default('nahwu'); // nahwu, qiraah, sharaf, lipia, balaghah
            $table->string('category_label')->default('Nahwu & Sharaf');
            $table->integer('total_questions')->default(5);
            $table->integer('estimated_minutes')->default(10);
            $table->string('level')->default('Sedang'); // Mudah, Sedang, Sulit
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('practice_questions', function (Blueprint $table) {
            $table->id();
            $table->string('practice_package_id');
            $table->foreign('practice_package_id')->references('id')->on('practice_packages')->cascadeOnDelete();
            $table->text('prompt_text');
            $table->text('arabic_text')->nullable();
            $table->text('passage_text')->nullable();
            $table->json('options'); // [{id: 'A', text: '...'}, {id: 'B', text: '...'}]
            $table->string('correct_answer', 10); // 'A', 'B', 'C', 'D'
            $table->text('explanation')->nullable();
            $table->integer('order_num')->default(1);
            $table->timestamps();
        });

        Schema::create('practice_attempts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('practice_package_id');
            $table->foreign('practice_package_id')->references('id')->on('practice_packages')->cascadeOnDelete();
            $table->integer('score')->default(0);
            $table->integer('correct_count')->default(0);
            $table->integer('total_count')->default(0);
            $table->json('user_answers')->nullable(); // {1: 'A', 2: 'B'}
            $table->timestamp('completed_at')->useCurrent();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('practice_attempts');
        Schema::dropIfExists('practice_questions');
        Schema::dropIfExists('practice_packages');
    }
};
