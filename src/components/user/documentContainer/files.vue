<template>
  <div>
    <h6>Files ({{ data.length }})</h6>
    <div v-for="file in data" :key="file.id" class="card card-body mb-2 p-3">
      <span>Name: {{ file.name }}</span>
      <span>Size: {{ file.size | formatBytes }}</span>
      <span>Created At: {{ file.createdAt | formatData }}</span>
    </div>
  </div>

</template>

<script lang="ts">
import { formatBytes, formatData } from '@/utils/helper';
import {Vue} from "vue-property-decorator";

export default Vue.extend({
  props: {
    data: {},
  },
  filters: {
    formatBytes,
    formatData,
  },
});
</script>
