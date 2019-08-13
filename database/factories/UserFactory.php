<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function () {
    static $password;
    return [
        'name' => 'Frank',
        'email' => 'flaat@kuijpers.com',
        'email_verified_at' => now(),
        'role' => 'admin',
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => Str::random(10),
    ];
});

$factory->define(App\contactCompany::class, function (Faker $faker) {
    return [
        'companies_name' => $faker->company,
        'companies_streetName' => $faker->streetName,
        'companies_streetNumber' => $faker->buildingNumber,
        'companies_streetPostalCode' => $faker->postcode,
        'companies_city'=> $faker->city,
        'companies_postalBox' => $faker->buildingNumber,
        'companies_PostalBoxCode'=> $faker->postcode,
        'companies_postalBoxCity'=> $faker->city,
        'companies_country'=> $faker->country,
        'companies_defaultEmail'=> $faker->companyEmail,
        'companies_projectEmail'=> $faker->companyEmail,
    ];
});

$factory->define(App\Project::class, function () {
    return [
        'name' => 'AMS5',
        'number' => '1180000',
        'branchOffice' => 'KCP',
        'location' => 'unieweg 5',
        'city' => 'amsterdam',
        'clientName' => 'Equinix',
        'consultantName'=> 'Deerns',
        'architectName'=> '',
        'description'=> 'Omschrijving wordt hier geplaatst',

    ];
});

$factory->define(App\contactPerson::class, function (Faker $faker) {

    $firstName = $faker->firstNameMale;
    $lastName = $faker->lastName;

    return [
        'contactPeople_nameSlug' => str::snake($firstName.$lastName),
        'contactPeople_initials' => $faker->titleMale,
        'contactPeople_firstName' =>  $firstName,
        'contactPeople_middleName' => $faker->titleMale,
        'contactPeople_lastName'=> $lastName,
        'contactPeople_phoneNumber'=> $faker->phoneNumber,
        'contactPeople_mobilePhoneNumber'=> $faker->phoneNumber,
        'contactPeople_email'=> $faker->companyEmail,
    ];
});

$factory->define(App\contactProductgroups::class, function () {
    return [
        'productgroup_nameSlug' => 'cctv_installatie',
        'productgroup_name' => 'CCTV installatie',
        'productgroup_description' => 'Aanleg,leveren en onderhoud',
    ];
});