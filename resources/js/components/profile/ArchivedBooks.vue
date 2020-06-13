<template>
    <div class="col-md-9">
        <div>
            <div class="bg-white p-3">
                <h3>Archived Books</h3>
                <div class="table-responsive mt-5">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="table-secondary">#</th>
                                <th class="table-secondary">book title</th>
                                <th class="table-secondary">image</th>
                                <th class="table-secondary">date</th>
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
            </div>
        </div>
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
