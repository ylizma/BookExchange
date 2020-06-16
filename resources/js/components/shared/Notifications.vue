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
        <div class="dropdown-menu dropdown-menu-right">
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
            <a href="" class="dropdown-item">
                <small class="item-center">mark all as read</small>
            </a>
        </div>
    </li>
</template>

<script>
export default {
    data() {
        return {
            notifications: {}
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
                    this.getNotifications(); //delete from notifications then push route 
                })
                .catch(err => {
                    console.error(err);
                });
        }
    },
    created() {
        this.getNotifications();
        setInterval(this.getNotifications, 30000);
    },
    destroyed() {
        clearInterval(this.getNotifications);
    }
};
</script>

<style></style>
