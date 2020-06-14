<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NotificationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'type' => $this->type,
            'notifiable_type' => $this->notifiable_type,
            'notifiable_user' => $this->notifiable_user,
            'proposal_book' => $this->proposal_book,
            'desired_book' => [
                'desired'=>$this->desired_book,
                // 'livre'=>$this->desired_book->livre
            ],
            'user' => $this->user,
            'read_at' => $this->read_at,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
