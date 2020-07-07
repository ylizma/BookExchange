<?php

use Illuminate\Database\Seeder;

class VilleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //path to sql file
        $sql = public_path('data/villes.sql');

        //collect contents and pass to DB::unprepared
        DB::unprepared(file_get_contents($sql));

    }
}
