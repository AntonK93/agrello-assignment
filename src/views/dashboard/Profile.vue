<template>
  <profile/>
</template>
<script lang="ts">

import profile from '@/components/user/profile.vue';
import {Vue} from "vue-property-decorator";

export default Vue.extend({
  components: {
    profile,
  },
});
</script>
