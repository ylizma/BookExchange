<template>
  <div>
    <div class="mt-3 container pt-4" style="">
        <!-- search component -->
        <search v-on:send="onSearch" />
    </div>
    <div class="bootstrap_cards2">
      <div class="container py-2">
        <div class="row pb-5">
          <homec v-for="(book, index) in books" :key="index" :book="book" />
        </div>
      </div>
    </div>
    <nav class="mt-2" v-if="!search">
      <ul class="pagination mx-auto">
        <li
          v-for="i in pagination.last_page"
          :key="i"
          class="page-item"
          :class="(i==pagination.current_page?'active':'')"
        >
          <a class="page-link" href="#" @click="getBooks(pagination.path+'?page='+i)">{{i}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Homec from "../../components/home/Book";
import Search from '../../components/home/Search'
export default {
  components: {
    Homec,
    Search
  },
  data() {
    return {
      books: [],
      pagination: {},
      search:false
    };
  },
  methods: {
    getBooks(url) {
      this.$store
        .dispatch("getHomeBooks", url)
        .then(res => {
          this.books = res.data;
          this.makepagination(res.meta);
        })
        .catch(err => console.log(err));
    },
    makepagination(links) {
      console.log(links);

      let pagination = {
        current_page: links.current_page,
        last_page: links.last_page,
        path: links.path
      };
      this.pagination = pagination;
    },
    onSearch(data){
      this.search = !this.search
      this.books=data.data
    }
  },
  created() {
    this.getBooks();
  }
};
</script>

<style>
</style>