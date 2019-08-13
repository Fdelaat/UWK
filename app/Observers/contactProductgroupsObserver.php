<?php

namespace App\Observers;

use App\contactProductgroups;

class contactProductgroupsObserver
{
    /**
     * Handle the contact productgroups "created" event.
     *
     * @param  \App\contactProductgroups  $contactProductgroups
     * @return void
     */
    public function created(contactProductgroups $contactProductgroups)
    {
        //
    }

    /**
     * Handle the contact productgroups "updated" event.
     *
     * @param  \App\contactProductgroups  $contactProductgroups
     * @return void
     */
    public function updated(contactProductgroups $contactProductgroups)
    {
        //
    }

    /**
     * Handle the contact productgroups "deleted" event.
     *
     * @param  \App\contactProductgroups  $contactProductgroups
     * @return void
     */
    public function deleted(contactProductgroups $contactProductgroups)
    {
        //
    }

    /**
     * Handle the contact productgroups "restored" event.
     *
     * @param  \App\contactProductgroups  $contactProductgroups
     * @return void
     */
    public function restored(contactProductgroups $contactProductgroups)
    {
        //
    }

    /**
     * Handle the contact productgroups "force deleted" event.
     *
     * @param  \App\contactProductgroups  $contactProductgroups
     * @return void
     */
    public function forceDeleted(contactProductgroups $contactProductgroups)
    {
        //
    }
}
