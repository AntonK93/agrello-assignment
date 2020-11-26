<template>
  <div>
    <transition name="slide-fade" appear>
      <authForm v-if="!this.$route.query.hasOwnProperty('code')"/>
    </transition>
  </div>
</template>
<script>
import authForm from '@/components/auth/authForm';
import {mapState} from "vuex";
import store from "@/store/store";

export default {
  components: {
    authForm,
  },
  computed: {
    ...mapState({
      loggedIn: state => state.auth.loggedIn,
    }),
  },
  watch: {
    loggedIn(newValue) {
      if (newValue === true) {
        this.$router.push('/');
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    if (store.state.auth.loggedIn) {
      next('/');
    }
    next();
  },
  mounted() {
    if (this.$route.query.hasOwnProperty('code')) {
      this.$store.dispatch('auth/getAccessToken', this.$route.query.code)
          .catch(() => {
            this.$router.push('auth');
          })
    }
  }
};
</script>
