<?php

namespace App;

use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;

class contactCompany extends Model
{
    use Searchable;

    public $asYouType = true;

    public function toSearchableArray()
    {
        $array = $this->only(
            'id','companies_name','companies_city','companies_country','companies_defaultEmail', 'companies_projectEmail'
        );

        return $array;
    }

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'contact_companies';

    /**
     * @var array
     */
    // protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'companies_name', 'companies_streetName','companies_streetNumber','companies_streetPostalCode',
        'companies_city','companies_postalBox','companies_postalBoxCode','companies_PostalBoxCity','companies_country',
        'companies_defaultEmail', 'companies_projectEmail'
    ];


    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function contactperson()
    {
        return $this->hasMany(contactPerson::class, 'company_id');
    }
}
