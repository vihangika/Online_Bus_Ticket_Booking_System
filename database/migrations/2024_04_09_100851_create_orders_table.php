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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('code')->nullable();
            $table->bigInteger('cart_id')->nullable();
            $table->string('cart_code')->nullable();
            $table->bigInteger('customer_id')->nullable();
            $table->string('customer_code')->nullable();
            $table->integer('status')->default(0);
            $table->string('customer_name')->nullable();
            $table->string('customer_email')->nullable();
            $table->decimal('total', 15, 2)->default(0);
            $table->integer('is_paid')->default(0);
            $table->integer('is_shipped')->default(0);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
