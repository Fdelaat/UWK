<?php

namespace App\Events\Contacts;

use App\contactCompany;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use App\Http\Resources\Contacts\contactCompany as contactCompanyResource;


class CompanySaved implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $contactCompany;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(contactCompany $contactCompany)
    {
         $this->contactCompany = [new contactCompanyResource($contactCompany)];
    }

    public function broadcastAs()
    {
        return 'CompanySaved';
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('contactcompany');

    }
}
