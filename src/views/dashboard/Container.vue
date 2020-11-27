<template>
  <container/>
</template>
<script lang="ts">

import container from '@/components/user/documentContainer/container.vue';
import {Vue} from "vue-property-decorator";

export default Vue.extend({
  components: {
    container,
  },
  mounted() {
    this.$store.dispatch('containers/openContainer', this.$route.params.id)
        .catch(() => {
          this.$router.push('/profile');
        });
  }
});
</script>
