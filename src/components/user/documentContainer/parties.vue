<template>
  <div>
    <h6>Participants ({{ participants.length }})</h6>
    <div v-for="participant in participants" :key="participant.id" class="card card-body mb-2 p-3">
      <span>Email: {{ participant.user.username }}</span>
    </div>
  </div>

</template>

<script lang="ts">

import Vue from 'vue';
import {party} from "@/store/interfaces/interfaces";

export default Vue.extend({
  props: {
    participants: Object as () => Array<party>,
  },
});
</script>
