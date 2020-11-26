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

<script>
import store from '../../store/store';
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState({
      loggedIn: state => state.auth.loggedIn,
    }),
  },
  beforeRouteEnter: (to, from, next) => {
    if (!store.state.auth.loggedIn) {
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
};
</script>
