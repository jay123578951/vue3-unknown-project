<template>
  <section v-show="isLogIn">
    <div class="admin">
      <div class="admin-nav">
        <Sidebar />
      </div>
      <div class="admin-cnt">
        <router-view />
      </div>
      <div class="admin-info">
        <div class="position-sticky top-0 pt-5">
          <div class="mb-5">
            <h5 class="mb-3">Payments</h5>
            <div class="card mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h5 class="card-title">Special title treatment</h5>
                  <img class="card-icon" src="@/assets/icons/visa.svg" alt="">
                </div>
                <p class="card-text">XXXX - XXXX - XXXX - XXXX - XXXX</p>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="fs-7 mb-0">XXX XXX</p>
                  <p class="fs-7 mb-0">MM/YY</p>
                </div>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h5 class="card-title">Special title treatment</h5>
                  <img class="card-icon" src="@/assets/icons/mastercard.svg" alt="">
                </div>
                <p class="card-text">XXXX - XXXX - XXXX - XXXX - XXXX</p>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="fs-7 mb-0">XXX XXX</p>
                  <p class="fs-7 mb-0">MM/YY</p>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-primary add-card-btn w-100">
              <span class="material-icons d-block">add</span>
              New card
            </button>
          </div>
          <div>
            <h5 class="mb-3">Messages</h5>
            <Toast />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Sidebar from '../../components/Sidebar.vue';
import Toast from '../../components/Toast.vue';

export default {
  name: 'Admin',
  components: {
    Sidebar,
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
    background-color: $body-color;
    padding: 0 1rem;
  }
  .admin-cnt {
    width: 100%;
    padding: 2rem;
  }
  .admin-info {
    width: 40%;
    padding: 0 1rem;
    background-color: $background;
  }
}
.card {
  border: none;
  border-radius: 0.75rem;
  .card-body {
    padding: 1rem 1.5rem;
  }
  .card-icon {
    width: 48px;
  }
  .fs-7 {
    font-size: 0.75rem;
  }
}
.add-card-btn {
  border-radius: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .material-icons {
    margin-right: 0.5rem;
  }
}
</style>
