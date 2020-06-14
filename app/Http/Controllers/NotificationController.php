<?php

namespace App\Http\Controllers;

use Illuminate\ {
    Http\Request,
    Notifications\DatabaseNotification
};

use App\User;
use App\Notification;

use App\Http\Resources\NotificationResource;


class NotificationController extends Controller
{

    public function index()
    {
        $user = auth()->user();

        return NotificationResource::collection($user->notifications);
    }

    public function update(Request $request)
    {
        $notificationId = request('notification_id');

        $userUnreadNotification = auth()->user()
                                    ->notifications
                                    ->where('id', $notificationId)
                                    ->first();

        if($userUnreadNotification) {
            $userUnreadNotification->markAsRead();
        }

        return response()->json('Notification marked as read', 200);
    }

}
