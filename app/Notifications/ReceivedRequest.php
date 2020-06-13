<?php

namespace App\Notifications;

use Illuminate\Notifications\Notification;

class ReceivedRequest extends Notification
{
    protected $user_id;
    protected $desired_book_id;
    protected $proposal_book_id;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($user_id, $desired_book_id, $proposal_book_id)
    {
        $this->user_id = $user_id;
        $this->desired_book_id= $desired_book_id;
        $this->proposal_book_id= $proposal_book_id;
    }

    public function via()
    {
        return ['database'];
    }

    public function toArray()
    {
        return [
            'desired_book' => (integer)$this->desired_book_id,
            'proposal_book' => (integer)$this->proposal_book_id,
            'user' => (integer)$this->user_id
        ];
    }
}
