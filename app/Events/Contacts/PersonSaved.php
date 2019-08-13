<?php

namespace App\Events\Contacts;

use App\contactPerson;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use App\Http\Resources\Contacts\contactPerson as contactPersonResource;

class PersonSaved implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $contactPerson;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(contactPerson $contactPerson)
    {
        $this->contactPerson = [new contactPersonResource($contactPerson)];
    }

    public function broadcastAs()
    {
        return 'PersonSaved';
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('contactperson');
    }
}
