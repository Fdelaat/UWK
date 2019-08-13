<?php

namespace App\Events\Contacts;

use App\contactProductgroups;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use App\Http\Resources\Contacts\contactProductGroups as contactProductGroupsResource;

class ProductGroupDestroy implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $productGroup;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(contactProductgroups $productGroups)
    {
        $this->productGroup =  [new contactProductGroupsResource($productGroups)];
    }

    public function broadcastAs()
    {
        return 'ProductGroupDestroyed';
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('productgroup');
    }
}
