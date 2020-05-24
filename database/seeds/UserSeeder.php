<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Ville::class, 10)->create()->each(function ($ville) {
            
            $ville->users()->saveMany(factory(App\User::class,3)->make());
        });
        factory(App\Livre::class,20)->create()->each(function ($livre){
            $livre->exemplaires()->saveMany(factory(App\Exemplaire::class,3)->make());
        });
        factory(App\PhotoLivre::class,60)->create();
    }
}
