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
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('bus_id')->nullable();
            $table->bigInteger('user_id')->nullable();
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->bigInteger('pickup')->nullable();
            $table->bigInteger('dropoff')->nullable();
            $table->date('date')->nullable();
            $table->integer('seats')->nullable();
            $table->text('requests')->nullable();
            $table->enum('status', ['PENDING', 'APPROVED', 'REJECTED', 'PAYMENT_PENDING'])->default('PENDING');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
