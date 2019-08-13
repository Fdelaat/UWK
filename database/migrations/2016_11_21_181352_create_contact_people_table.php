<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContactPeopleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contact_people', function (Blueprint $table) {

            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('company_id')->unsigned()->nullable();
            $table->string('contactPeople_nameSlug')->unique();
            $table->string('contactPeople_initials')->nullable();
            $table->string('contactPeople_firstName')->nullable();
            $table->string('contactPeople_middleName')->nullable();
            $table->string('contactPeople_lastName')->nullable();
            $table->string('contactPeople_phoneNumber')->nullable();
            $table->string('contactPeople_mobilePhoneNumber')->nullable();
            $table->string('contactPeople_email')->unique();
            $table->timestamps();

        });

        Schema::table('contact_people', function ($table) {

            $table->foreign('company_id')
                ->references('id')
                ->on('contact_companies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contact_people');
    }
}
