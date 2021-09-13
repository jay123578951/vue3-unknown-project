<template>
  <section class="d-flex justify-content-between align-items-center mb-5">
    <h3 class="mb-0">Products</h3>
    <form class="search-btn d-flex">
      <input class="form-control" type="search" placeholder="Search" aria-label="Search">
      <button class="btn" type="submit">
        <span class="material-icons">search</span>
      </button>
    </form>
  </section>
  <section class="productsTable">
    <button type="button" class="btn btn-primary mb-3"
      @click="openModal(true)">Add Product</button>
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th width="120">Category</th>
          <th width="120">Origin price</th>
          <th width="120">Price</th>
          <th width="100">Enabled</th>
          <th width="200">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>
            <span class="table-title">{{ product.title }}</span>
          </td>
          <td>
            <span class="table-category">{{ product.category }}</span>
          </td>
          <td class="text-right">
            {{ product.origin_price }}
          </td>
          <td class="text-right">
            {{ product.price }}
          </td>
          <td>
            <span class="text-success" v-if="product.is_enabled">Enable</span>
            <span class="text-muted" v-else>Not Enabled</span>
          </td>
          <td>
            <div class="table-btns">
              <button class="btn me-3">
                <span class="material-icons table-btns-edit"
                  @click="openModal(false, product)">edit</span>
              </button>
              <button class="btn">
                <span class="material-icons table-btns-delete"
                  @click="openDelModal(product)">delete</span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  <ProductModal ref="productModal"
    @update-product="updateProduct"
    :product-info="tempProduct"></ProductModal>
  <DelModal ref="delModal"
    @del-product="deleteProduct"
    :del-product-info="tempProduct"></DelModal>
</template>

<script>
import ProductModal from '../../components/ProductModal.vue';
import DelModal from '../../components/DelModal.vue';

export default {
  name: 'Products',
  components: {
    ProductModal,
    DelModal,
  },
  data() {
    return {
      products: [],
      is_enabled: 1,
      tempProduct: {},
      isNew: false,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
          }
        });
    },
    openModal(isNew, product) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...product };
      }
      this.isNew = isNew;
      this.$refs.productModal.showModal();
    },
    updateProduct(product) {
      this.tempProduct = product;
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      let apiMethods = 'post';

      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${product.id}`;
        apiMethods = 'put';
      }

      this.$http[apiMethods](api, { data: this.tempProduct })
        .then((res) => {
          if (res.data.success) {
            this.getProducts();
            this.$refs.productModal.hideModal();
          }
        });
    },
    openDelModal(product) {
      this.tempProduct = { ...product };
      this.$refs.delModal.showModal();
    },
    deleteProduct(product) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${product.id}`;
      this.$http.delete(api)
        .then((res) => {
          console.log(res.data.message);
          this.$refs.delModal.hideModal();
          this.getProducts();
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.search-btn {
  position: relative;
  width: 320px;
  input {
    padding: 1rem;
    padding-left: 50px;
    border: none;
    border-radius: 00.75rem;
    background-color: $background;
  }
  button {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 0.75rem 1rem;
  }
  span {
    vertical-align: middle;
  }
}
.table > :not(caption) > * > * {
  vertical-align: middle;
  padding: 0.75rem;
}
.table-title {
  font-weight: bold;
}
.table-category {
  opacity: 0.5;
}
.table-btns {
  button {
    padding: 1rem;
    border-radius: 0.75rem;
    background: #fff;
    transition: $transition-base;
    &:hover {
      background: $background;
      .table-btns-edit {
        color: $primary;
      }
      .table-btns-delete {
        color: $danger;
      }
    }
    span {
      display: block;
      color: $third-hover;
      transition: $transition-base;
    }
  }
}
</style>
