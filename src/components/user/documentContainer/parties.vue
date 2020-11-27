<template>
  <div>
    <h6>Participants ({{ data.length }})</h6>
    <div v-for="participant in data" :key="participant.id" class="card card-body mb-2 p-3">
      <span>Email: {{ participant.user.username }}</span>
    </div>
  </div>

</template>

<script lang="ts">

import {Vue} from "vue-property-decorator";

export default Vue.extend({
  props: {
    data: {},
  },
});
</script>
