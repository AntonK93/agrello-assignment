<template>
  <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
    <div class="card card-shadow card-body my-5 p-4">
      <h4 class="card-title text-center">Log in with .ID</h4>
      <a
          class="btn btn-lg btn-primary btn-block text-uppercase"
          :href="authLink">
        Log in
      </a>
    </div>
  </div>

</template>

<script lang="ts">

import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      authLink: 'auth/authLink',
    }),
  },
};
</script>
