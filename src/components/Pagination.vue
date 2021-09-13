<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination pagination-lg justify-content-center">
      <li class="page-item"
        :class="pagination.has_pre ? '' : 'disabled'">
        <a class="page-link" href="#" aria-label="Previous"
          @click.prevent="$emit('emit-pages', pagination.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page">
        <a class="page-link" href="#"
          @click.prevent="$emit('emit-pages', page)">{{ page }}</a>
      </li>
      <li class="page-item"
        :class="pagination.has_next ? '' : 'disabled'">
        <a class="page-link" href="#" aria-label="Next"
          @click.prevent="$emit('emit-pages', pagination.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      pagination: {},
    };
  },
  props: {
    pages: {
      type: Object,
      default() { return {}; },
    },
  },
  watch: {
    pages() {
      this.pagination = this.pages;
    },
  },
};
</script>
