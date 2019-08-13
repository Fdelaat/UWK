<?php

namespace App\Observers;

use App\contactPerson;

class contactPersonObserver
{
    /**
     * Handle the contact person "created" event.
     *
     * @param  \App\contactPerson  $contactPerson
     * @return void
     */
    public function created(contactPerson $contactPerson)
    {
        //
    }

    /**
     * Handle the contact person "updated" event.
     *
     * @param  \App\contactPerson  $contactPerson
     * @return void
     */
    public function updated(contactPerson $contactPerson)
    {
        //
    }

    /**
     * Handle the contact person "deleted" event.
     *
     * @param  \App\contactPerson  $contactPerson
     * @return void
     */
    public function deleted(contactPerson $contactPerson)
    {
        //
    }

    /**
     * Handle the contact person "restored" event.
     *
     * @param  \App\contactPerson  $contactPerson
     * @return void
     */
    public function restored(contactPerson $contactPerson)
    {
        //
    }

    /**
     * Handle the contact person "force deleted" event.
     *
     * @param  \App\contactPerson  $contactPerson
     * @return void
     */
    public function forceDeleted(contactPerson $contactPerson)
    {
        //
    }
}
