<?php

use Illuminate\Database\Seeder;

use App\Categorie;

class PopulateCategorieFromCSV extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (($handle = fopen ( public_path () . '/data/data.csv', 'r' )) !== FALSE) {
            while ( ($data = fgetcsv ( $handle, 1000, ',' )) !== FALSE ) {
                $categorie = new Categorie ();
                $categorie->nom = $data [0];
                $categorie->save ();
            }
            fclose ( $handle );
        }
    }
}
