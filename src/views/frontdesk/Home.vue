<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from '../../components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  z-index: 1;
  background: #0F161E;
}
.login-btn {
  span {
    display: block;
    font-size: 2rem;
  }
}
</style>
