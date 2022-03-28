<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('packages')->insert([
            [
                'name' => 'Fully tucked',
                'description' => 'Descent sized client base marketing',
                'price' => '8000',
                'email_count' => '20000',
            ],
            [
                'name' => 'Busy Bee',
                'description' => 'For the active users with a large client list',
                'price' => '12000',
                'email_count' => '50000',
            ],
            [
                'name' => 'Young Guru',
                'description' => 'For those seeking to reach a huge client base',
                'price' => '15000',
                'email_count' => '75000',
            ],
            [
                'name' => 'Social Magnet',
                'description' => 'For marketing campaigns on a massive scale',
                'price' => '18000',
                'email_count' => '100000',
            ]
        ]);


    }
}
