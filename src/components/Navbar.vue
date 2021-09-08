<template>
  <nav class="navbar navbar-expand-lg">
    <div class="collapse navbar-collapse">
      <ul class="nav flex-column nav-pills nav-justified">
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            <span class="material-icons">home</span>
            <span class="nav-link-text">Home</span>
          </router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" to="/admin/products">
            <span class="material-icons">shopping_bag</span>
            <span class="nav-link-text">Products</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            <span class="material-icons">sell</span>
            <span class="nav-link-text">Coupons</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            <span class="material-icons">article</span>
            <span class="nav-link-text">Articles</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            <span class="material-icons">credit_card</span>
            <span class="nav-link-text">Credit card</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            <span class="material-icons">person</span>
            <span class="nav-link-text">Person</span>
          </router-link>
        </li>
        <li class="nav-item">
          <button type="button" class="nav-link" @click="logOut">
            <span class="material-icons">logout</span>
            <span class="nav-link-text">Log out</span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logOut() {
      const api = `${process.env.VUE_APP_API}/logout`;
      this.$http.post(api)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          this.$router.push('/');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  margin: 0;
  padding: 0;
}
.nav-item {
  &.active {
    .nav-link {
      color: $primary;
    }
    .material-icons {
      background-color: $primary;
      color: #fff;
    }
    .nav-link-text {
      bottom: -12px;
      opacity: 1;
    }
  }
}
.nav-link {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $body-color;
  margin-bottom: 1.5rem;
  &:hover {
    .material-icons {
      background-color: $secondary;
      color: $body-color;
    }
    .nav-link-text {
      bottom: -12px;
      opacity: 1;
    }
  }
  .material-icons {
    background-color: $third-hover;
    border-radius: 0.75rem;
    padding: 1rem;
    margin-bottom: 4px;
    transition: $transition-base;
  }
  .nav-link-text {
    position: absolute;
    bottom: -16px;
    font-size: 14px;
    opacity: 0;
    transition: $transition-base;
  }
}
</style>
