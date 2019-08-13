<?php

use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

        public function run()
    {
        // Create 200 contact persons
        factory(App\Project::class, 1)->create();
    }

}
