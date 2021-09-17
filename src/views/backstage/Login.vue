<template>
  <section class="login-background">
    <div class="container">
      <div class="row vh-100 justify-content-center align-items-center">
        <div class="col col-md-6 col-lg-4">
          <form class="login-form" @submit.prevent="signIn">
            <h2 class="fs-1 mb-4">Welcome back!</h2>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp" v-model="user.username">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"
                v-model="user.password">
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Remember me?</label>
            </div>
            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary mb-4">Submit</button>
            </div>
            <div class="login-type">
              <div class="login-type-divide mb-4">
                <span class="divide-line"></span>
                <span class="divide-text">OR</span>
                <span class="divide-line"></span>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <button type="button" class="login-type-btn login-type-google">
                  <img src="@/assets/icons/google.svg" alt="">
                  <span>Sign in with Google</span>
                </button>
                <button type="button" class="login-type-btn login-type-apple">
                  <img src="@/assets/icons/apple.svg" alt="">
                </button>
                <button type="button" class="login-type-btn">
                  <img src="@/assets/icons/facebook.svg" alt="">
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
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
    };
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
            this.$router.push('/admin');
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  .login-background {
    background-image: url('/images/login-background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
  .form-control {
    padding: 0.875rem 1rem;
    border-radius: 1rem;
  }
  .btn {
    padding: 0.875rem 1rem;
    border-radius: 1rem;
  }
  .login-form {
    background: $background;
    padding: 3rem 1rem;
    border-radius: 2rem;
    @media screen and (min-width: 768px) {
      padding: 3rem 2.5rem;
    }
  }
  .login-type {
    .login-type-divide {
      font-size: 14px;
      color: $body-color;
      display: flex;
      justify-content: center;
      align-items: center;
      .divide-text {
        padding: 0 1rem;
      }
      .divide-line {
        width: 100px;
        height: 1px;
        background-color: $body-color;
      }
    }
    .login-type-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      background: white;
      border: none;
      border-radius: 0.75rem;
      transition: $transition-base;
      &:hover {
        background: $third;
      }
      span {
        display: block;
      }
      img {
        height: 18px;
        margin: 2px;
      }
    }
    .login-type-google {
      span {
        font-size: 12px;
        padding-left: 8px;
        display: none;
      }
    }
    .login-type-apple {
      margin: 0 1rem;
    }
  }
</style>
