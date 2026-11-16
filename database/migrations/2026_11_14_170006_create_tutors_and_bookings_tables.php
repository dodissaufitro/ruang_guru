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
        Schema::create('tutors', function (Blueprint $table) {
            $table->string('id')->primary(); // e.g. 'tutor-1', 'tutor-2'
            $table->string('name');
            $table->string('title');
            $table->string('university');
            $table->string('avatar')->nullable();
            $table->json('specialties'); // ['Nahwu & Sharaf Lanjutan', 'Persiapan LIPIA']
            $table->decimal('rating', 3, 1)->default(5.0);
            $table->integer('review_count')->default(0);
            $table->integer('students_count')->default(0);
            $table->decimal('hourly_rate', 10, 2)->default(75000);
            $table->text('bio')->nullable();
            $table->boolean('is_available')->default(true);
            $table->timestamps();
        });

        Schema::create('tutor_bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('tutor_id');
            $table->foreign('tutor_id')->references('id')->on('tutors')->cascadeOnDelete();
            $table->string('service_type')->default('videocall'); // 'chat', 'videocall', 'berkas'
            $table->string('booking_date'); // 'Besok (15 Nov 2026)'
            $table->string('booking_time'); // '16:00 - 17:00 WIB'
            $table->text('note')->nullable();
            $table->string('status')->default('confirmed'); // 'pending', 'confirmed', 'completed', 'cancelled'
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tutor_bookings');
        Schema::dropIfExists('tutors');
    }
};
