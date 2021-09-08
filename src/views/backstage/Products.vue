<template>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>產品名稱</th>
        <th width="120">分類</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
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
              <span class="material-icons table-btns-edit">edit</span>
            </button>
            <button class="btn">
              <span class="material-icons table-btns-delete">delete</span>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      products: null,
      is_enabled: 1,
    };
  },
  created() {
    const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products`;
    this.$http.get(api)
      .then((res) => {
        if (res.data.success) this.products = res.data.products;
      });
  },
};
</script>

<style lang="scss" scoped>
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
