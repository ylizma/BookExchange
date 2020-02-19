<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLivreForeignKeyToExemplaires extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('exemplaires', function (Blueprint $table) {
            $table->foreign('livre_id')->references('id')->on('livres'); //onDelete ??
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('exemplaires', function (Blueprint $table) {
            //
        });
    }
}
