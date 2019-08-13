<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call(contactCompanySeeder::class);
        $this->call(contactPersonSeeder::class);
        $this->call(ProjectSeeder::class);
        $this->call(adminSeeder::class);

        Model::reguard();
    }
}
