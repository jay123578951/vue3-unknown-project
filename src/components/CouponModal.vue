<template>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
  aria-hidden="true" ref="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Coupon setting</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label for="coupon-title" class="form-label">Title</label>
          <input type="text" class="form-control" id="coupon-title"
            placeholder="Example input placeholder" v-model="tempCoupon.title">
        </div>
        <div class="mb-3">
          <label for="coupon-percent" class="form-label">Percent</label>
          <input type="number" class="form-control" id="coupon-percent"
            placeholder="Another input placeholder" v-model="tempCoupon.percent">
        </div>
        <div class="mb-3">
          <label for="coupon-date" class="form-label">Due_date</label>
          <Datepicker class="" id="coupon-date"
            v-model="picked" />
        </div>
        <div class="mb-3">
          <label for="coupon-code" class="form-label">Code</label>
          <input type="text" class="form-control" id="coupon-code"
            placeholder="Another input placeholder" v-model="tempCoupon.code">
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox"
              :true-value="1"
              :false-value="0"
              id="is_enabled"
              v-model="tempCoupon.is_enabled">
            <label class="form-check-label" for="is_enabled">
              Is enabled ?
            </label>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary"
          data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"
          @click="this.$emit('update', tempCoupon)">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { Modal } from 'bootstrap';
import Datepicker from 'vue3-datepicker';

export default {
  name: 'CouponModal',
  components: {
    Datepicker,
  },
  data() {
    return {
      modal: {},
      picked: new Date(),
      tempCoupon: {},
    };
  },
  props: ['couponInfo'],
  watch: {
    picked() {
      const unix = Date.parse(this.picked);
      this.tempCoupon.due_date = unix;
    },
    couponInfo() {
      this.tempCoupon = this.couponInfo;
    },
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
