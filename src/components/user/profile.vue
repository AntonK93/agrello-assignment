<template>
  <div id="profile" class="row gutters-sm">
    <div class="col-md-3 mb-3">
      <div class="card card-body">
        <div class="d-flex flex-column align-items-center text-center">
          <img src="@/assets/images/avatar7.png" alt="User" class="rounded-circle" width="150">
          <div class="mt-3">
            <h4 class="text-capitalize">{{ fullName }}</h4>
            <p class="text-secondary mb-1">Email: {{ userData.identifier }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-9 mb-3">
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Full Name</h6>
          </div>
          <div class="col-sm-9 text-secondary text-capitalize">
            {{ fullName }}
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Email</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            {{ userData.identifier }}
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Date of birth</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            {{ userData.dateOfBirth }}
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 mb-3">
      <div class="card card-body">
        <containers/>
      </div>
    </div>
  </div>

</template>

<script lang="ts">

import {mapState} from 'vuex';
import Vue from 'vue';
import containers from "@/components/user/documentContainer/containers.vue";

export default Vue.extend({
  components: {
    containers,
  },
  computed: {
    ...mapState('user', [
      'userData',
    ]),
    fullName() {
      const fullName = this.userData.firstName + ' ' + this.userData.lastName;
      return fullName.toLowerCase();
    },
  },
  mounted() {
    this.$store.dispatch('user/getUserInfo');
    this.$store.dispatch('containers/getUserContainerList');
  },
});
</script>
