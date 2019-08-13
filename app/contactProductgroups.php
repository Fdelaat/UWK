<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class contactProductgroups extends Model
{
    use Searchable;

    public $asYouType = true;

    public function toSearchableArray()
    {
        $array = $this->only(
            'id','productgroup_name'
        );

        return $array;
    }

    protected $table = 'productgroups';


    protected $fillable = [
        'id','productgroup_nameSlug', 'productgroup_name', 'productgroup_description'
    ];

    protected $casts = [
        'id' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function company()
    {
        return $this->belongsToMany(contactCompany::class);
    }

}
