<?php

use Illuminate\Database\Seeder;


use AntoineAugusti\Books\Fetcher;
use GuzzleHttp\Client;

use Faker\Factory as Faker;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        var_dump(openssl_get_cert_locations());
        $client = new Client(['verify' => 'C:\wamp64\bin\php\php7.2.18\extras\ssl\cacert.pem','base_uri' => 'https://www.googleapis.com/books/v1/']);
        $fetcher = new Fetcher($client);

        $isbn_array= [
            '9780544003415',
            '9780553380163',
            '9780451524935',
            '0307588378',
            '0307474275',
            '1400031702',
            '9780307387899',
            '0375725784',
            '0446602612',
            '1557427666',
            '9780345816023',
            '9780061122415'
        ];
        $photos_array = [];
        foreach ($isbn_array as $isbn){
            $book = $fetcher->forISBN($isbn);
            $faker = Faker::create();
            var_dump($book->thumbnail);
            var_dump($book->title);
            var_dump($faker->paragraph);
            $new_book = new App\Livre();
            $new_book->titre = $book->title;
            $new_book->isbn = $isbn;
            $new_book->auteurs = $book->authors[0];
            $new_book->resume = $faker->paragraph;
            $new_book->categorie_id = App\Categorie::all()->random()->id;
            $new_book->save();


            $image_name = $isbn. '.jpg';
            $path = 'images/books/'. $image_name;
            //$photos_array[$new_book->isbn] = $image_name;
            copy($book->thumbnail, public_path($path));

            $new_book->exemplaires()->saveMany(factory(App\Exemplaire::class,1)->make())
            ->each(function($exemplaire) use($image_name){
                $photo = new App\PhotoLivre;
                $photo->exemplaire_id = $exemplaire->id;
                $photo->image = $image_name;
                $photo->save();
            });
        }
        var_dump($photos_array);
    }
}
