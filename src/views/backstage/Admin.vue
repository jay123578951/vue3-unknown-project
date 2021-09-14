<template>
  <section v-show="isLogIn">
    <div class="admin">
      <div class="admin-nav">
        <Navbar />
      </div>
      <div class="admin-cnt">
        <router-view />
      </div>
      <div class="admin-info">
        <h5 class="mb-3">Messages</h5>
        <Toast />
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '../../components/Navbar.vue';
import Toast from '../../components/Toast.vue';

export default {
  name: 'Admin',
  components: {
    Navbar,
    Toast,
  },
  data() {
    return {
      isLogIn: false,
    };
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)signIn\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;

    const api = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http.post(api)
      .then((res) => {
        if (res.data.success) {
          this.$router.push('/admin/products');
          this.isLogIn = true;
        } else {
          this.$router.push('/login');
        }
      });
  },
};
</script>

<style lang="scss" scoped>
.admin {
  display: flex;
  min-height: 100vh;
  .admin-nav {
    width: auto;
    background-color: $background;
    padding: 2rem 0.5rem;
  }
  .admin-cnt {
    width: 100%;
    padding: 2rem;
  }
  .admin-info {
    width: 40%;
    padding: 2rem 1rem;
    background-color: $background;
  }
}
</style>
