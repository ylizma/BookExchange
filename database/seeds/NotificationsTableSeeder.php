<?php

use Illuminate\Database\Seeder;

class NotificationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('notifications')->insert([
            0 => [
                'id' => '6bd79182-0d88-48b7-8e4e-59dbf3371763',
                'type' => 'App\Notifications\ReceivedRequest',
                'notifiable_type' => 'App\Models\User',
                'notifiable_id' => '2',
                'data' => '{"user":3,"desired_book":3,"proposal_book":1}'
            ],
            1 => [
                'id' => '6c7b833c-4a12-44d5-8fbe-f542e688b865',
                'type' => 'App\Notifications\ReceivedRequest',
                'notifiable_type' => 'App\Models\User',
                'notifiable_id' => '2',
                'data' => '{"user":5,"desired_book":3,"proposal_book":5}'
            ]
        ]);
    }
}
