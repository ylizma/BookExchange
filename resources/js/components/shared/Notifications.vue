<template>
    <li class="nav-item dropdown dropbottom">
        <a
            class="nav-link dropdown-toggle"
            data-toggle="#"
            aria-expanded="false"
            href="#"
        >
            <i class="fa fa-bell"
                ><span class="badge badge-light" style="font-size: 10px">{{
                    notifications.count
                }}</span></i
            >
        </a>
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
        }
    },
    created() {
        this.getNotifications();
        setInterval(this.getNotifications, 60000);
    },
    destroyed() {
        clearInterval(this.getNotifications);
    }
};
</script>

<style></style>
