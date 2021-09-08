<template>
  <Navbar v-show="isLogIn" />
  <div class="container-fluid">
    <router-view v-show="isLogIn" />
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue';

export default {
  name: 'DashBoard',
  components: {
    Navbar,
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
