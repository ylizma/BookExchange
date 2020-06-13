<?php

namespace App\Http\Controllers;

use Illuminate\ {
    Http\Request,
    Notifications\DatabaseNotification
};

use App\User;

class NotificationController extends Controller
{

    public function index()
    {
        $user = auth()->user();
        $unreadNotifications = $user->unreadNotifications;

        return response()->json(['notifications' => $unreadNotifications, 'count' => $unreadNotifications->count()]);
    }

    public function update(Request $request)
    {
        $notificationId = request('notification_id');

        $userUnreadNotification = auth()->user()
                                    ->unreadNotifications
                                    ->where('id', $notificationId)
                                    ->first();

        if($userUnreadNotification) {
            $userUnreadNotification->markAsRead();
        }

        return response()->json('Notification marked as read', 200);
    }

}
