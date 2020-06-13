<template>
    <div class="">
        <div
            v-show="submitted || hasError"
            class="alert"
            v-bind:class="{
                'alert-danger': hasError,
                'alert-success': !hasError
            }"
            role="alert"
        >
            {{ alert_message }}
        </div>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">sender</th>
                        <th scope="col">city</th>
                        <th scope="col">date</th>
                        <th scope="col">proposal book</th>
                        <th>book state</th>
                        <th scope="col">desired book</th>
                        <th scope="col">accept/reject</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(book, index) in books" :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ book.user.name }}</td>
                        <td>{{ book.user.ville.name }}</td>
                        <td>{{ book.requested_at }}</td>
                        <td>
                            <a
                                href="#"
                                data-toggle="modal"
                                data-target="#exampleModalCenter"
                                @click="getBookById(book.userbook.id)"
                                >{{ book.userbook.livre.titre }} (click to
                                preview)</a
                            >
                        </td>
                        <td>
                            {{ book.userbook.etat }}
                        </td>
                        <td>
                            <a
                                href="#"
                                @click="getBookById(book.desiredbook.id)"
                                data-toggle="modal"
                                data-target="#exampleModalCenter"
                            >
                                {{ book.desiredbook.livre.titre }} (click to
                                preview)
                            </a>
                        </td>
                        <td v-if="book.status != 'accepted'">
                            <button
                                class="btn btn-primary sm"
                                @click="acceptRequest(book.id)"
                            >
                                accept
                            </button>
                            <button
                                class="btn btn-danger sm"
                                @click="refuseRequest(book.id)"
                            >
                                reject
                            </button>
                        </td>
                        <td v-else>
                            ACCEPTED
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div
            class="modal fade bd-example-modal-lg"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    ...
                </div>
            </div>
        </div>
        <div
            class="modal fade bd-example-modal-lg"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
        >
            <div
                class="modal-dialog modal-dialog-centered modal-lg"
                role="document"
            >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">
                            {{ book.livre.livre.titre || "" }}
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <img
                                v-for="(img, index) in book.img"
                                :key="index"
                                :src="
                                    img.image
                                        ? '/images/books/' + img.image
                                        : 'https://dummyimage.com/128x200/000000/ffffff'
                                "
                                alt=" "
                                width="200"
                                height="350"
                            />
                        </div>
                        <div class="book-info">
                            <p>title: {{ book.livre.livre.titre || "" }}</p>
                            <p>title: {{ book.livre.categorie.nom || "" }}</p>
                            <p>state: {{ book.etat || "" }}</p>
                            <p>Owner : {{ book.user.name || "" }}</p>
                            <p>Email : {{ book.user.email || "" }}</p>
                            <p v-if="book.user.telephone">
                                Telephone : {{ book.user.telephone || "" }}
                            </p>
                            <p>language: {{ book.langue || "" }}</p>
                        </div>
                    </div>
                    <div
                        class="modal fade bd-example-modal-lg"
                        id="exampleModalCenter"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalCenterTitle"
                        aria-hidden="true"
                    >
                        <div
                            class="modal-dialog modal-dialog-centered modal-lg"
                            role="document"
                        >
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalCenterTitle">
                                        {{ book.livre.livre.titre || "" }}
                                    </h5>
                                    <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div>
                                        <img
                                            v-for="(img, index) in book.img"
                                            :key="index"
                                            :src="img.image"
                                            alt=" "
                                            width="200"
                                            height="350"
                                        />
                                    </div>
                                    <div class="book-info">
                                        <p>title: {{ book.livre.livre.titre || "" }}</p>
                                        <p>title: {{ book.livre.categorie.nom || "" }}</p>
                                        <p>state: {{ book.etat || "" }}</p>
                                        <p>Owner : {{ book.user.name || "" }}</p>
                                        <p>language: {{ book.langue || "" }}</p>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            books: [],
            book: {
                livre: { livre: "", categorie: "" },
                state: "",
                user: "",
                language: "",
                img: ""
            },
            submitted: false,
            hasError: false,
            alert_message: ""
        };
    },
    methods: {
        getBookById(id) {
            this.$store
                .dispatch("getBookInfos", id)
                .then(res => (this.book = res.data))
                .catch(err => console.error(err));
        },
        acceptRequest(id) {
            const data = {
                id: id
            };
            this.$store
                .dispatch("acceptUserRequest", data)
                .then(res => {
                    this.getRequests();
                    this.submitted = true;
                    this.alert_message = "the request is accepted";
                })
                .catch(err => {
                    this.hasError = true;
                    this.alert_message = "error !!";
                    console.error(err);
                });
        },
        refuseRequest(id) {
            const data = {
                id: id
            };
            this.$store
                .dispatch("refuseUserRequest", data)
                .then(res => {
                    this.getRequests();
                    this.submitted = true;
                    this.alert_message = "the request is refused";
                })
                .catch(err => {
                    this.hasError = true;
                    this.alert_message = "error !!";
                    console.error(err);
                });
        },
        getRequests() {
            this.$store
                .dispatch("getUserRequests", "receive")
                .then(res => {
                    this.books = res.data.filter(
                        res => res.status != "refused"
                    );
                    console.log(res.data);
                })
                .catch(err => console.error(err));
        }
    },
    created() {
        this.getRequests();
    }
};
</script>

<style></style>
