<template>
  <div>
    <h6>Files ({{ files.length }})</h6>
    <div v-for="fileElement in files" :key="fileElement.id" class="card card-body mb-2 p-3">
      <span>Name: {{ fileElement.name }}</span>
      <span>Size: {{ fileElement.size | formatBytes }}</span>
      <span>Created At: {{ fileElement.createdAt | formatData }}</span>
    </div>
  </div>

</template>

<script lang="ts">
import { formatBytes, formatData } from '@/utils/helper';
import { file } from "@/store/interfaces/interfaces";
import Vue from 'vue';

export default Vue.extend({
  props: {
    files: Object as () => Array<file>,
  },
  filters: {
    formatBytes,
    formatData,
  },
});
</script>
