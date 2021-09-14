<template>
  <div aria-live="polite" aria-atomic="true">
    <div class="toast-container">
      <Toast></Toast>
    </div>
  </div>
</template>
z
<script>
import Toast from '@/components/Toast.vue';

export default {
  name: 'ToastMessages',
  components: {
    Toast,
  },
};
</script>
