<template>
  <container/>
</template>
<script>

import container from '@/components/user/documentContainer/container';
export default {
  components: {
    container,
  },
  mounted() {
    this.$store.dispatch('containers/openContainer', this.$route.params.id)
        .catch(() => {
          this.$router.push('/profile');
        });
  }
};
</script>
