<template>
  <Loading :active="isLoading"></Loading>
  <section>
    <h3 class="mb-5">Coupon Page</h3>
    <button type="button" class="btn btn-primary add-btn mb-3"
      @click="openModal(true)">
      <span class="material-icons">add</span>
    </button>
    <div class="couponsList">
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th width="80">percent</th>
            <th width="200">due_date</th>
            <th width="150">code</th>
            <th width="100">Enabled</th>
            <th width="150">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="coupon in coupons" :key="coupon.id">
            <td>
              <span class="table-title">{{ coupon.title }}</span>
            </td>
            <td>
              <span>{{ coupon.percent }} %</span>
            </td>
            <td class="text-right">{{ coupon.due_date }}</td>
            <td class="text-right">{{ coupon.code }}</td>
            <td>
              <span class="text-success" v-if="coupon.is_enabled">Enable</span>
              <span class="text-muted" v-else>Not Enabled</span>
            </td>
            <td>
              <div class="table-btns">
                <button class="btn me-3" @click="openModal(false, coupon)">
                  <span class="material-icons table-btns-edit">edit</span>
                </button>
                <button class="btn" @click="openDelModal(coupon)">
                  <span class="material-icons table-btns-delete">delete</span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination :pages="pagination"
      @emit-pages="getCoupons"></Pagination>
  </section>
  <CouponModal ref="couponModal"
    :couponInfo="tempCoupon"
    @update="updateCoupon"></CouponModal>
  <DelCouponModal ref="delCouponModal"
    :couponInfo="tempCoupon"
    @delete="deleteCoupon"
  ></DelCouponModal>
</template>

<script>
import { mapState } from 'vuex';
import CouponModal from '../../components/CouponModal.vue';
import DelCouponModal from '../../components/DelCouponModal.vue';
import Pagination from '../../components/Pagination.vue';

export default {
  name: 'Coupon',
  components: {
    CouponModal,
    DelCouponModal,
    Pagination,
  },
  data() {
    return {
      coupons: [],
      tempCoupon: {},
      pagination: {},
      isNew: false,
      isLoading: false,
    };
  },
  created() {
    this.getCoupons();
  },
  computed: {
    ...mapState(['msg']),
  },
  methods: {
    getCoupons() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.pagination = res.data.pagination;
            this.coupons = [];
            res.data.coupons.forEach((item) => {
              const date = new Date(item.due_date).toLocaleString();
              const coupons = {
                ...item,
                due_date: date,
              };
              this.coupons.push(coupons);
            });
          }
          this.isLoading = false;
        });
    },
    updateCoupon(coupon) {
      this.tempCoupon = coupon;
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let apiMethods = 'post';

      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${coupon.id}`;
        apiMethods = 'put';
      }

      this.$http[apiMethods](api, { data: this.tempCoupon })
        .then((res) => {
          if (res.data.success) {
            this.getCoupons();
            this.$refs.couponModal.hideModal();
            this.$store.commit('setMsg', {
              icon: 'success',
              status: 'check',
              title: 'Update Coupons',
              content: 'Coupon update successfully！',
            });
          } else {
            this.$store.commit('setMsg', {
              icon: 'error',
              status: 'error_outline',
              title: 'Update Coupon',
              content: 'Coupon update failed！',
            });
          }
        });
    },
    openModal(isNew, coupon) {
      if (isNew) {
        this.tempCoupon = {};
      } else {
        this.tempCoupon = { ...coupon };
      }
      this.isNew = isNew;
      this.$refs.couponModal.showModal();
    },
    openDelModal(coupon) {
      this.tempCoupon = coupon;
      this.$refs.delCouponModal.showModal();
    },
    deleteCoupon(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`;
      this.$http.delete(api)
        .then((res) => {
          if (res.data.success) {
            this.$refs.delCouponModal.hideModal();
            this.getCoupons();
            this.$store.commit('setMsg', {
              icon: 'success',
              status: 'check',
              title: 'Update Coupons',
              content: 'Coupon update successfully！',
            });
          } else {
            this.$store.commit('setMsg', {
              icon: 'error',
              status: 'error_outline',
              title: 'Update Coupon',
              content: 'Coupon update failed！',
            });
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.add-btn {
  padding: 1rem;
  border-radius: 0.75rem;
  float: right;
  span {
    display: block;
  }
}
.couponsList {
  margin-bottom: 2rem;
  .table > :not(caption) > * > * {
    vertical-align: middle;
    text-align: center;
  }
  .table-title {
    font-weight: bold;
  }
  .table-btns {
    button {
      padding: 1rem;
      border-radius: 0.75rem;
      background: #fff;
      transition: $transition-base;
      &:hover {
        background: $background;
        .table-btns-edit {
          color: $primary;
        }
        .table-btns-delete {
          color: $danger;
        }
      }
      span {
        display: block;
        color: $third-hover;
        transition: $transition-base;
      }
    }
  }
}
</style>
