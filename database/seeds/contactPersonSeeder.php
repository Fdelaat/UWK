<?php

use Illuminate\Database\Seeder;

class contactPersonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create 200 contact persons
        factory(App\contactPerson::class, 200)->create();
    }
}
