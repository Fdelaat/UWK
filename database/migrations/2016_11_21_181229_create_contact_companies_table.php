<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContactCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contact_companies', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('companies_name')->unique()->index();
            $table->string('companies_streetName')->nullable();
            $table->string('companies_streetNumber')->nullable();
            $table->string('companies_streetPostalCode')->nullable();
            $table->string('companies_city')->nullable();
            $table->string('companies_postalBox')->nullable();
            $table->string('companies_postalBoxCode')->nullable();
            $table->string('companies_PostalBoxCity')->nullable();
            $table->string('companies_country')->nullable();
            $table->string('companies_defaultEmail')->unique();
            $table->string('companies_projectEmail')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contact_companies');
    }
}
