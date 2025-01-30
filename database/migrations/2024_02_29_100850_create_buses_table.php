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
        Schema::create('buses', function (Blueprint $table) {
            $table->id();
            $table->string('code')->nullable();
            $table->string('license_plate')->nullable();
            $table->string('driver_name')->nullable();
            $table->string('name')->nullable();
            $table->integer('status')->nullable();
            $table->string('description')->nullable();
            $table->string('from')->nullable();
            $table->string('to')->nullable();
            $table->time('departure_time')->nullable();
            $table->time('arrival_time')->nullable();
            $table->bigInteger('seats')->nullable();
            $table->foreignId('category_id')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('buses');
    }
};
