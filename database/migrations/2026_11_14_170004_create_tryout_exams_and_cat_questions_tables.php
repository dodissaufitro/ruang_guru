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
        Schema::create('tryout_exams', function (Blueprint $table) {
            $table->string('id')->primary(); // e.g. 'to-lipia-akbar-2026'
            $table->string('code')->unique(); // 'CAT-LIPIA-2026'
            $table->string('title');
            $table->string('target_campus')->default('LIPIA Jakarta');
            $table->integer('total_questions')->default(20);
            $table->integer('duration_minutes')->default(90);
            $table->integer('passing_grade_score')->default(700);
            $table->integer('participants_count')->default(0);
            $table->json('subtests')->nullable(); // ['Qawa\'id wa I\'rob', 'Fahmul Maqru\'', 'Tsaqafah']
            $table->string('status')->default('open'); // 'open', 'upcoming', 'closed'
            $table->text('description')->nullable();
            $table->timestamps();
        });

        Schema::create('cat_questions', function (Blueprint $table) {
            $table->id();
            $table->string('tryout_exam_id');
            $table->foreign('tryout_exam_id')->references('id')->on('tryout_exams')->cascadeOnDelete();
            $table->string('subtest')->default("Qawa'id wa I'rob");
            $table->text('prompt_text');
            $table->text('arabic_text')->nullable();
            $table->text('passage_text')->nullable();
            $table->json('options'); // [{id: 'A', text: '...'}, {id: 'B', text: '...'}]
            $table->string('correct_answer', 10); // 'A', 'B', 'C', 'D', 'E'
            $table->text('explanation')->nullable();
            $table->integer('order_num')->default(1);
            $table->timestamps();
        });

        Schema::create('cat_exam_results', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('tryout_exam_id');
            $table->foreign('tryout_exam_id')->references('id')->on('tryout_exams')->cascadeOnDelete();
            $table->integer('score')->default(0); // 0-1000
            $table->integer('correct_count')->default(0);
            $table->integer('total_questions')->default(0);
            $table->integer('time_spent_seconds')->default(0);
            $table->boolean('is_passed')->default(false);
            $table->json('user_answers')->nullable(); // {1: 'A', 2: 'B'}
            $table->json('flagged_questions')->nullable();
            $table->json('subtest_scores')->nullable();
            $table->timestamp('completed_at')->useCurrent();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cat_exam_results');
        Schema::dropIfExists('cat_questions');
        Schema::dropIfExists('tryout_exams');
    }
};
