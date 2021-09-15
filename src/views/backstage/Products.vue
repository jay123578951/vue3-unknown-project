<template>
  <Loading :active="isLoading"></Loading>
  <section class="d-flex justify-content-between align-items-center mb-5">
    <h3 class="mb-0">Products Page</h3>
    <form class="search-btn d-flex">
      <input class="form-control" type="search" placeholder="Search" aria-label="Search">
      <button class="btn" type="submit">
        <span class="material-icons">search</span>
      </button>
    </form>
  </section>
  <section class="d-flex justify-content-between align-items-center mb-5">
    <div class="product-quantity">
      <span class="material-icons">receipt_long</span>
      <div>
        <p>Product quantity</p>
        <h3>{{ products.length }}</h3>
      </div>
    </div>
    <div class="product-quantity ms-3 me-3">
      <span class="material-icons">trending_up</span>
      <div>
        <p>Product quantity</p>
        <h3>35%</h3>
      </div>
    </div>
    <div class="product-quantity">
      <span class="material-icons">public</span>
      <div>
        <p>Product quantity</p>
        <h3>714</h3>
      </div>
    </div>
  </section>
  <section>
    <h5 class="mb-3">Type ratio</h5>
    <div class="progress mb-5">
      <div class="progress-bar" role="progressbar" style="width: 15%"
        aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="progress-bar bg-success" role="progressbar" style="width: 30%"
        aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="progress-bar bg-info" role="progressbar" style="width: 20%"
        aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </section>
  <section class="productsTable">
    <div class="d-flex justify-content-between align-items-center">
      <h5>Products list</h5>
      <button type="button" class="btn btn-primary add-btn mb-3"
        @click="openModal(true)">
        <span class="material-icons">add</span>
      </button>
    </div>
    <div class="productsList">
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
    </div>
    <!-- <ul class="productsList2">
      <li class="d-flex justify-content-between align-items-center"
        v-for="product in products" :key="product.id">
        <div class="productsList2-title">{{ product.title }}</div>
        <div class="productsList2-category">{{ product.category }}</div>
        <div class="productsList2-origin-price">{{ product.origin_price }}</div>
        <div class="productsList2-price">{{ product.price }}</div>
        <div class="productsList2-enabled">
          <span class="text-success" v-if="product.is_enabled">Enable</span>
          <span class="text-muted" v-else>Not Enabled</span>
        </div>
        <div class="productsList2-btns">
          <button class="btn me-3">
            <span class="material-icons table-btns-edit"
              @click="openModal(false, product)">edit</span>
          </button>
          <button class="btn">
            <span class="material-icons table-btns-delete"
              @click="openDelModal(product)">delete</span>
          </button>
        </div>
      </li>
    </ul> -->
    <Pagination @emit-pages="getProducts"
      :pages="pagination"></Pagination>
  </section>
  <ProductModal ref="productModal"
    @update-product="updateProduct"
    :product-info="tempProduct"></ProductModal>
  <DelModal ref="delModal"
    @del-product="deleteProduct"
    :del-product-info="tempProduct"></DelModal>
</template>

<script>
import { mapState } from 'vuex';
import ProductModal from '../../components/ProductModal.vue';
import DelModal from '../../components/DelModal.vue';
import Pagination from '../../components/Pagination.vue';

export default {
  name: 'Products',
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  data() {
    return {
      products: [],
      is_enabled: 1,
      tempProduct: {},
      pagination: {},
      isNew: false,
      isLoading: false,
      mag: {},
    };
  },
  created() {
    this.getProducts();
  },
  computed: {
    ...mapState(['msg']),
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
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
            this.$store.commit('setMsg', {
              icon: 'success',
              status: 'check',
              title: 'Update products',
              content: 'Product update successfully！',
            });
          } else {
            this.$store.commit('setMsg', {
              icon: 'error',
              status: 'error_outline',
              title: 'Update products',
              content: 'Product update failed！',
            });
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
          if (res.data.success) {
            this.$refs.delModal.hideModal();
            this.getProducts();
            this.$store.commit('setMsg', {
              icon: 'success',
              status: 'check',
              title: 'Delete products',
              content: 'Product delete successfully！',
            });
          } else {
            this.$store.commit('setMsg', {
              icon: 'error',
              status: 'error_outline',
              title: 'Delete products',
              content: 'Product delete failed！',
            });
          }
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
    padding: 0.75rem 1rem;
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
.product-quantity {
  display: flex;
  align-items: center;
  width: calc(100% / 3);
  padding: 1.25rem;
  border-radius: 0.75rem;
  box-shadow: 0 .5rem 1rem rgba(#000, .15);
  .material-icons {
    font-size: 2.75em;
    margin-right: 1rem;
    // color: $primary;
    // color: $third;
  }
  p {
    margin-bottom: 0;
    opacity: 0.5;
  }
  h3 {
    margin-bottom: 0;
    font-size: 2.5rem;
    // color: $third;
  }
}
.add-btn {
  padding: 1rem;
  border-radius: 0.75rem;
  span {
    display: block;
  }
}
.productsList {
  // height: 300px;
  // overflow-y: scroll;
  margin-bottom: 2rem;
  .table > :not(caption) > * > * {
    vertical-align: middle;
    text-align: center;
    // padding: 0 0.75rem;
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
}
.productsList2 {
  margin: 0;
  margin-bottom: 2rem;
  padding: 0;
  // height: 250px;
  // overflow-y: scroll;
  li {
    // padding: 1rem 0;
    // margin-bottom: 1rem;
    // border-radius: 0.75rem;
    border-bottom: 1px solid $background;
    // box-shadow: 0 .5rem 1rem rgba(#000, .15);
  }
  div {
    padding: 0.5rem 0;
    width: calc((100% - 20%) / 5);
    text-align: center;
  }
  .productsList2-title {
    width: 20%;
    text-align: left;
  }
  // .productsList2-category {
  //   width: 10%;
  // }
  // .productsList2-origin-price {
  //   width: 10%;
  // }
  // .productsList2-price {
  //   width: 10%;
  // }
  // .productsList2-enabled {
  //   width: 10%;
  // }
}
</style>
