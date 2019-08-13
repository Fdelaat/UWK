<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class contactPerson extends Model
{
    use Searchable;

    public $asYouType = true;

    public function toSearchableArray()
    {
        $array = $this->only(
            'id','contactPeople_nameSlug','contactPeople_firstName','contactPeople_lastName','contactPeople_email'
        );

        return $array;
    }
     /**
     * @var string
     */
    protected $table = 'contact_people';


    /**
     * @var array
     */
    // protected $dates = ['deleted_at'];

    /**
     * @var array
     */
    protected $fillable = [
        'company_id','contactPeople_nameSlug', 'contactPeople_initials','contactPeople_firstName','contactPeople_middleName',
        'contactPeople_lastName','contactPeople_phoneNumber','contactPeople_mobilePhoneNumber','contactPeople_email'
    ];


    /**
     * @var array
     */
    protected $hidden = [
        'company_id'
    ];

    protected $casts = [
        'company_id' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function company()
    {
        return $this->belongsTo(contactCompany::class);
    }

}
