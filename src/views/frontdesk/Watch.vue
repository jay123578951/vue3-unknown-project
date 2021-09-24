<template>
  <Loading :active="isLoading"></Loading>
  <section>
    <img :src="`${tempProduct.imageUrl}`" alt="" style="width: 200px">
    <p>{{ tempProduct.title }}</p>
    <p>{{ tempProduct.category }}</p>
    <p>$ {{ tempProduct.price }}</p>
    <p>{{ tempProduct.content }}</p>
  </section>
</template>

<script>
export default {
  name: 'Watch',
  data() {
    return {
      tempProduct: [],
      isLoading: false,
    };
  },
  created() {
    const { productId } = this.$route.params;
    const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${productId}`;
    this.isLoading = true;
    this.$http.get(api)
      .then((res) => {
        if (res.data.success) {
          this.tempProduct = res.data.product;
          this.isLoading = false;
        }
      });
  },
};
</script>
