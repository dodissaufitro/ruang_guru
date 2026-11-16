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
        Schema::create('universities', function (Blueprint $table) {
            $table->string('id')->primary(); // e.g. 'univ-lipia', 'univ-uim-madinah'
            $table->string('name');
            $table->string('arabic_name');
            $table->string('city');
            $table->string('country');
            $table->string('country_code', 5); // 'SA', 'EG', 'ID', 'JO', 'MA', 'TR'
            $table->string('flag', 10); // '🇮🇩', '🇸🇦'
            $table->string('scholarship_type'); // 'Full Funded', 'Bebas SPP 100%', 'Jalur Kemenag RI'
            $table->string('badge_color')->default('bg-emerald-50 text-emerald-700 border-emerald-200');
            $table->string('status')->default('Buka Pendaftaran');
            $table->string('status_color')->default('bg-emerald-500 text-white');
            $table->string('deadline')->nullable();
            $table->string('academic_year')->default('2026 / 2027');
            $table->string('acceptance_rate')->default('15%');
            $table->string('tuition_fee')->default('Gratis 100%');
            $table->string('monthly_allowance')->nullable();
            $table->string('quota')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->string('image')->nullable();
            $table->text('description')->nullable();
            $table->json('featured_faculties')->nullable();
            $table->json('facilities')->nullable();
            $table->json('requirements')->nullable();
            $table->json('documents')->nullable();
            $table->json('selection_stages')->nullable();
            $table->string('official_portal_url')->nullable();
            $table->timestamps();
        });

        Schema::create('saved_universities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('university_id');
            $table->foreign('university_id')->references('id')->on('universities')->cascadeOnDelete();
            $table->timestamps();

            $table->unique(['user_id', 'university_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('saved_universities');
        Schema::dropIfExists('universities');
    }
};
