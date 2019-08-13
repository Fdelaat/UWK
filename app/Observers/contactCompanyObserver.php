<?php

namespace App\Observers;

use App\contactCompany;

class contactCompanyObserver
{
    /**
     * Handle the contact company "created" event.
     *
     * @param  \App\contactCompany  $contactCompany
     * @return void
     */
    public function created(contactCompany $contactCompany)
    {
        //
    }

    /**
     * Handle the contact company "updated" event.
     *
     * @param  \App\contactCompany  $contactCompany
     * @return void
     */
    public function updated(contactCompany $contactCompany)
    {
        //
    }

    /**
     * Handle the contact company "deleted" event.
     *
     * @param  \App\contactCompany  $contactCompany
     * @return void
     */
    public function deleted(contactCompany $contactCompany)
    {
        //
    }

    /**
     * Handle the contact company "restored" event.
     *
     * @param  \App\contactCompany  $contactCompany
     * @return void
     */
    public function restored(contactCompany $contactCompany)
    {
        //
    }

    /**
     * Handle the contact company "force deleted" event.
     *
     * @param  \App\contactCompany  $contactCompany
     * @return void
     */
    public function forceDeleted(contactCompany $contactCompany)
    {
        //
    }
}
