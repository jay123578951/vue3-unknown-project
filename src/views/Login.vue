<template>
  <section v-show="isLogIn">
    <form @submit.prevent="signIn">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1"
          aria-describedby="emailHelp" v-model="user.username">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"
          v-model="user.password">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      isLogIn: false,
    };
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)signIn\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;

    const api = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http.post(api)
      .then((res) => {
        if (res.data.success) this.$router.push('dashboard');
        else this.isLogIn = true;
      });
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}/admin/signin`;

      this.$http.post(api, this.user)
        .then((res) => {
          if (!res.data.success) {
            alert('帳號密碼錯誤');
            return;
          }
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `signIn=${token}; expires=${new Date(expired)}`;
            this.$router.push('dashboard');
          }
        });
    },
  },
};
</script>
