<template>
    <li class="nav-item dropdown dropbottom">
        <a
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
            href="#"
        >
            <i class="fa fa-bell"
                ><span class="badge badge-success" style="font-size: 10px">{{
                    notifications.length
                }}</span></i
            >
        </a>
        <div class="dropdown-menu dropdown-menu-right" v-if="notifications.length > 0">
            <a
                href="#"
                class="dropdown-item"
                v-for="(notification, index) in notifications"
                :key="index"
                @click="readNotification(notification)"
            >
                user {{ notification.user[0].name }} sent you an exchange
                request with the book {{ notification.proposal_book[0].id }}
            </a>
<<<<<<< HEAD
            <a href="" class="dropdown-item">
                <small class="item-center">{{ $t('notifications.mark_all_as_read') }}</small>
=======
            <a href="" class="dropdown-item" >
                <small class="item-center" >mark all as read</small>
>>>>>>> cda0600557f4e08ff1dfb571c369e8dbc1e02fca
            </a>
        </div>
    </li>
</template>

<script>
export default {
    data() {
        return {
            notifications: []
        };
    },
    methods: {
        getNotifications() {
            this.$store
                .dispatch("getuserNotifications")
                .then(res => {
                    this.notifications = res;
                    console.log(res);
                })
                .catch(err => console.log(err));
        },
        readNotification(notif) {
            var data = {
                notification_id: notif.id
            };
            this.$store
                .dispatch("readNotification", data)
                .then(res => {
                    this.notifications = this.notifications.filter(
                        not => not.id != notif.id
                    ); //delete from notifications then push route
                    this.$router.push("/profile/requests/received");
                })
                .catch(err => {
                    console.error(err);
                });
        }
    },
    created() {
        this.getNotifications();
        setInterval(this.getNotifications, 10000);
    },
    destroyed() {
        clearInterval(this.getNotifications);
    }
};
</script>

<style></style>
