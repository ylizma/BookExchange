<?php

use Illuminate\Database\Seeder;
use NotificationsTableSeeder as NotificationsTableSeeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(PopulateCategorieFromCSV::class);
        $this->call(VilleSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(BookSeeder::class);
        $this->call(NotificationsTableSeeder::class);
    }
}
