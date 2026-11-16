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
        Schema::table('users', function (Blueprint $table) {
            $table->string('role')->default('siswa')->after('email'); // superadmin, guru, siswa
            $table->string('phone')->nullable()->after('role');
            $table->string('learning_goal')->nullable()->after('phone');
            $table->string('avatar')->nullable()->after('learning_goal');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['role', 'phone', 'learning_goal', 'avatar']);
        });
    }
};
