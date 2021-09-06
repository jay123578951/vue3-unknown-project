<template>
  <section>
    <h1>後台</h1>
    <router-link to="/">
      <button type="button" class="btn btn-primary">回到前台</button>
    </router-link>
    <button type="button" class="btn btn-secondary" @click="logOut">登出</button>
  </section>
</template>

<script>

export default {
  name: 'DashBoard',
  methods: {
    logOut() {
      const api = `${process.env.VUE_APP_API}/logout`;
      this.$http.post(api)
        .then((res) => {
          alert(res.data.message);
          this.$router.push('/login');
        });
    },
  },
};
</script>
