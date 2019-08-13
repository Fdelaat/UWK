<?php

use Illuminate\Database\Seeder;

class contactCompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create 50 companies
        factory(App\contactCompany::class, 50)->create();
    }
}
