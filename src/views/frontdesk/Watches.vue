<template>
  <Loading :active="isLoading"></Loading>
  <section>
    <div class="container">
      <h3 class="pt-5 pb-3">192 Results</h3>
      <div class="row">
        <div class="col-3" v-for="product in tempProducts" :key="product.id">
          <div class="card mb-5">
            <img :src="product.imageUrl" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.content }}</p>
              <p class="card-text">$ {{ product.price }}</p>
              <button type="button" class="btn btn-primary"
                @click="getProduct(product.id)">See more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Watches',
  data() {
    return {
      tempProducts: [],
      isLoading: false,
    };
  },
  created() {
    const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
    this.isLoading = true;
    this.$http.get(api)
      .then((res) => {
        if (res.data.success) {
          this.tempProducts = res.data.products;
          this.isLoading = false;
        }
      });
  },
  methods: {
    getProduct(productId) {
      this.$router.push(`/watch/${productId}`);
    },
  },
};
</script>
