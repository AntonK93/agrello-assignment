<template>
  <div id="dashboard">
    <div class="container-xl">
      <nav class="breadcrumb">
        <router-link class="nav-link" :to="{ name: 'profile' }">User Profile</router-link>
      </nav>
      <transition name="slide-fade" mode="out-in" appear>
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import store from '../../store/store';
import {mapState} from "vuex";
import {Vue} from "vue-property-decorator";

export default Vue.extend({
  computed: {
    ...mapState('auth', [
      'loggedIn',
    ]),
  },
  beforeRouteEnter: (to, from, next) => {
    if (!store.getters['auth/loggedIn']) {
      next('/auth');
    }
    next();
  },
  watch: {
    loggedIn(newValue) {
      if (newValue === false) {
        this.$router.push('/auth');
      }
    }
  },
});
</script>
