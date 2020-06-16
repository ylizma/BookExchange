<template>
  <div>
    <form @submit.prevent="search">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
              <input
                type="text"
                class="form-control search-slt"
                :placeholder="$t('home.search.title')"
                v-model="title"
              />
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
              <select
                class="form-control search-slt"
                id="exampleFormControlSelect1"
                v-model="category"
              >
                <option value disabled>{{ $t('home.search.select_category') }}</option>
                <option
                  v-for="(category, index) in categories"
                  :key="index"
                  :value="category.id"
                >{{category.nom}}</option>
              </select>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
              <select class="form-control search-slt" id="exampleFormControlSelect1" v-model="city">
                <option value disabled>{{ $t('home.search.select_city') }}</option>
                <option v-for="(city, index) in cities" :key="index" :value="city.id">{{city.name}}</option>
              </select>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 pl-1">
              <button type="submit" class="btn btn-danger wrn-btn">{{ $t('home.search.search_btn') }}</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      category: "",
      city: "",
      categories: [],
      cities: []
    };
  },
  methods: {
    getCtaegories() {
      this.$store
        .dispatch("getCategories")
        .then(res => {
          this.categories = res.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    getCities() {
      this.$store
        .dispatch("fetchCities")
        .then(res => {
          this.cities = res.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    search() {
      if (this.city == "" && this.title == "" && this.category == "") {
        console.log("empty");
      } else {
        console.log(this.title);

        let data = {
          key: this.title,
          city: this.city,
          category: this.category
        };
        this.$store
          .dispatch("searchBook", data)
          .then(res => {
            // console.log(res);
            this.$emit("send", res);
          })
          .catch(err => console.error(err));
      }
    }
  },
  created() {
    this.getCtaegories();
    this.getCities();
  },
};
</script>

<style>
</style>
