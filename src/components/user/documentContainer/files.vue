<template>
  <div>
    <h6>Files ({{ data.length }})</h6>
    <div v-for="file in data" :key="file.id" class="card card-body mb-2 p-3">
      <span>Name: {{ file.name }}</span>
      <span>Size: {{ file.size | formatBytes }}</span>
      <span>Created At: {{ handleDate(file.createdAt) }}</span>
    </div>
  </div>

</template>

<script>
import { formatBytes, handleDate }  from '@/utils/helper';
export default {
  props: {
    data: {},
  },
  filters: {
    formatBytes,
  },
  methods: {
    handleDate,
  }
};
</script>
