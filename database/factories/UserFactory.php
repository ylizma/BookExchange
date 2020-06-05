<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use App\Ville;
use App\Livre;
use App\PhotoLivre;
use App\Exemplaire;
use App\Categorie;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Ville::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'region' =>$faker->numberBetween(0,100),
    ];
});

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => Hash::make('123'), // password
        'remember_token' => Str::random(10),
    ];
});

$factory->define(Categorie::class, function (Faker $faker) {
    return [
        'nom' => $faker->name,
    ];
});

$factory->define(Livre::class, function (Faker $faker) {
    return [
        'titre' => $faker->word,
        'auteurs' => $faker->name,
        'isbn' => Str::random(10),
        'resume' => $faker->paragraph,
        'categorie_id' => Categorie::all()->random()->id,
    ];
});

$factory->define(Exemplaire::class, function (Faker $faker) {
    return [
        'langue' => $faker->randomElement(['english', 'frensh', 'arabic']),
        'etat' => $faker->randomElement(['new', 'old']),
        'user_id' => User::all()->random()->id,
    ];
});

$factory->define(PhotoLivre::class, function (Faker $faker) {
    return [
        'image' => $faker->imageUrl(400, 240),
        'exemplaire_id' => Exemplaire::all()->random()->id,
    ];
});
