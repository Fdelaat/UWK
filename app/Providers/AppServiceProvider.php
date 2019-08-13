<?php

namespace App\Providers;

use App\User;
use App\Project;
use App\contactPerson;
use App\contactCompany;
use App\contactProductgroups;
use App\Observers\UserObserver;
use App\Observers\ProjectObserver;
use Illuminate\Support\ServiceProvider;
use App\Observers\contactPersonObserver;
use App\Observers\contactCompanyObserver;
use App\Observers\contactProductgroupsObserver;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        User::observe(UserObserver::class);
        Project::observe(ProjectObserver::class);
        contactPerson::observe(contactPersonObserver::class);
        contactCompany::observe(contactCompanyObserver::class);
        contactProductgroups::observe(contactProductgroupsObserver::class);
    }
}
