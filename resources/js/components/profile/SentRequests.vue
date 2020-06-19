<template>
    <div class="col-md-9">
        <div>
            <div class="bg-white p-3">
                <h3> {{ $t('usercp.requests.sent.header') }} </h3>
                    <div class="table-responsive mt-5">
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
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="table-secondary">#</th>
                                    <th class="table-secondary">{{ $t('usercp.requests.sent.owner') }}</th>
                                    <th class="table-secondary">{{ $t('usercp.requests.shared.city') }}</th>
                                    <th class="table-secondary">{{ $t('usercp.requests.shared.date') }}</th>
                                    <th class="table-secondary">{{ $t('usercp.requests.shared.proposal_book') }}</th>
                                    <th class="table-secondary">{{ $t('usercp.requests.shared.book_state') }}</th>
                                    <th class="table-secondary">{{ $t('usercp.requests.shared.desired_book') }}</th>
                                    <th class="table-secondary">{{ $t('usercp.requests.sent.request_state') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(book, index) in books" :key="index">
                                    <th scope="row">{{ index + 1 }}</th>
                                    <td>
                                        {{ book.desiredbook.user.name }}
                                        <i
                                            v-if="
                                                book.status == 'accepted' &&
                                                    book.desiredbook.user.email != ''
                                            "
                                        >
                                            {{ book.desiredbook.user.email }}
                                        </i>
                                        <i
                                            v-if="
                                                book.status == 'accepted' &&
                                                    book.desiredbook.user.telephone != ''
                                            "
                                            >{{ book.desiredbook.user.telephone }}</i
                                        >
                                    </td>
                                    <td>{{ book.desiredbook.user.ville.name }}</td>
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
                                    <td>
                                        {{ book.status }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
                                            <p>
                                                category: {{ book.livre.categorie.nom || "" }}
                                            </p>
                                            <p>language: {{ book.langue || "" }}</p>
                                            <p>state: {{ book.etat || "" }}</p>
                                            <p>Owner : {{ book.user.name || "" }}</p>
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
        getRequests() {
            this.$store
                .dispatch("getUserRequests", "sent")
                .then(res => {
                    this.books = res.data;
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
