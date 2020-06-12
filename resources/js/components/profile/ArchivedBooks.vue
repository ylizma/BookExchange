<template>
    <div class="">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">book title</th>
                    <th scope="col">image</th>
                    <th scope="col">date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(book, index) in books" :key="index">
                    <td>{{index}}</td>
                    <td> {{book.livre.livre.titre}} </td>
                    <td >
                        <img v-if="book.img[0]" :src="book.img[0].image" alt="" width="200" height="150">
                         </td>
                         <td>{{book.created_at}} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            books: []
        };
    },
    methods: {
        getArchivedBooks() {
            this.$store
                .dispatch("getArchivedBooks")
                .then(res => {
                    console.log(res);
                    this.books=res;
                })
                .catch(err => {
                    console.error(err);
                });
        }
    },
    created() {
        this.getArchivedBooks();
    }
};
</script>

<style></style>
