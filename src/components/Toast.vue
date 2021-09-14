<template>
  <div aria-live="polite" aria-atomic="true">
    <div class="toast-container">
      <div ref="toast">
        <div class="toast fade show mb-3" role="alert" aria-live="assertive" aria-atomic="true"
          v-for="(msg, key) in this.$store.state.msg" :key="key">
          <div class="toast-header">
            <span class="material-icons me-1" :class="msg.icon">
              {{ msg.status }}
            </span>
            <strong class="me-auto">{{ msg.title }}</strong>
            <button type="button" class="btn-close"
              data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            {{ msg.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Toast from 'bootstrap/js/dist/toast';

export default {
  name: 'Toast',
  // mounted() {
  //   const toastEl = this.$refs.toast;
  //   const toast = new Toast(toastEl, {
  //     autohide: false,
  //   });
  //   toast.show();
  // },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.toast-container {
  width: 100%;
}
.toast {
  width: 100%;
  border-radius: 0.75rem;
  border: none;
  box-shadow: none;
  .toast-header {
    padding: 1rem 1rem 0.75rem 1rem;
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
    .btn-close {
      margin-right: 0;
    }
  }
  .toast-body {
    padding: 0.75rem 1rem 1rem 1rem;
  }
}
.success {
  color: $success;
}
.error {
  color: $danger;
}
</style>
