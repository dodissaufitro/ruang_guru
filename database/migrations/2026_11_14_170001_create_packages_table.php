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
        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('subtitle')->nullable();
            $table->string('category')->default('Umum'); // SNBT, Kedinasan, Bahasa Arab, LIPIA, dll
            $table->string('tag')->nullable(); // e.g. "SNBT 2026 Terbaru", "Standar Internasional"
            $table->string('tag_color')->default('bg-blue-600');
            $table->decimal('original_price', 12, 2)->default(0);
            $table->decimal('discount_price', 12, 2)->default(0);
            $table->decimal('monthly_price', 12, 2)->default(0);
            $table->string('period_label')->default('Tahun Ajaran 2026/2027');
            $table->json('features')->nullable(); // list of bullet points
            $table->decimal('rating', 3, 1)->default(4.9);
            $table->string('image')->nullable();
            $table->boolean('is_popular')->default(false);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('package_enrollments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('package_id')->constrained()->cascadeOnDelete();
            $table->string('status')->default('active'); // active, expired, cancelled
            $table->timestamp('enrolled_at')->useCurrent();
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('package_enrollments');
        Schema::dropIfExists('packages');
    }
};
