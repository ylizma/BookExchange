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

            // $table->timestamp('accepted_at');
            // $table->timestamp('requested_at');

            // $table->integer('user_id')->unsigned();
            // $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            // $table->integer('my_book')->unsigned();
            // $table->foreign('my_book')->references('id')->on('exemplaires')->onDelete('cascade');

            // $table->integer('desired_book')->unsigned();
            // $table->foreign('desired_book')->references('id')->on('exemplaires')->onDelete('cascade');

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
