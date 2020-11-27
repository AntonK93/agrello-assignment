<template>
  <div>
    <transition name="slide-fade" appear>
      <authForm v-if="!this.$route.query.hasOwnProperty('code')"/>
    </transition>
  </div>
</template>

<script lang="ts">
import authForm from '@/components/auth/authForm.vue';
import {mapState} from "vuex";
import store from "@/store/store";
import {Vue} from "vue-property-decorator";

export default Vue.extend({
  components: {
    authForm,
  },
  computed: {
    ...mapState('auth', [
      'loggedIn',
    ]),
  },
  watch: {
    loggedIn(newValue) {
      if (newValue === true) {
        this.$router.push('/');
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    if (store.getters['auth/loggedIn']) {
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
});
</script>
