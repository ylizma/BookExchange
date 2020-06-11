<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExchangesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exchanges', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->timestamp('accepted_at')->nullable();
            $table->timestamp('requested_at')->nullable();
            $table->timestamp('refused_at')->nullable();

            $table->string('status')->default('pending');

            $table->bigInteger('user_id')->unsigned()->index();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            $table->bigInteger('my_book')->unsigned()->nullable();
            $table->foreign('my_book')->references('id')->on('exemplaires')->onDelete('cascade');

            $table->bigInteger('desired_book')->unsigned()->nullable();
            $table->foreign('desired_book')->references('id')->on('exemplaires')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('exchanges');
    }
}
