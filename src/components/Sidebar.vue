<template>
  <section class="position-sticky top-0 pt-4">
    <div class="user-photo">
      <img src="@/assets/icons/people.svg" alt="">
      <p>Jay xxx</p>
    </div>
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
            <router-link class="nav-link" to="/admin/coupon">
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
  </section>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logOut() {
      const api = `${process.env.VUE_APP_API}/logout`;
      this.$http.post(api)
        .then((res) => {
          alert(res.data.message);
          this.$router.push('/');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.user-photo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  color: white;
  img {
    width: 70px;
    background: $secondary;
    border-radius: 50%;
    padding: 0.5rem;
  }
  p {
    font-weight: 600;
    margin-bottom: 0;
  }
}
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
      background-color: $third;
      color: white;
    }
  }
}
.nav-link {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  &:hover {
    .material-icons {
      background-color: $primary-hover;
      color: white;
    }
    .nav-link-text {
      bottom: -20px;
      opacity: 1;
    }
  }
  .material-icons {
    font-size: 2rem;
    background-color: none;
    border-radius: 0.75rem;
    padding: 0.75rem;
    transition: $transition-base;
  }
  .nav-link-text {
    position: absolute;
    bottom: -28px;
    color: white;
    font-size: 12px;
    opacity: 0;
    transition: $transition-base;
  }
}
</style>
