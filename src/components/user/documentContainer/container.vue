<template>
  <div v-if="container">
    <div class="row gutters-sm">
      <div class="col-md-12 mb-3">
        <div class="card card-body">
            <h6 class="d-flex align-items-center mb-3">Document container: {{ container.name }}</h6>
            <div>
              <div>Created at: {{ handleDate(container.createdAt) }}</div>
              <div>Size: {{ container.size | formatBytes }}</div>
              <div class="d-flex justify-content-between">
                <div class="card card-body bg-light m-2">
                  <files :data="container.files"/>
                </div>
                <div class="card card-body bg-light m-2">
                  <parties :data="container.parties"/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>

</template>

<script>

import {mapGetters} from "vuex";
import files from "@/components/user/documentContainer/files";
import parties from "@/components/user/documentContainer/parties";
import { formatBytes, handleDate }  from '@/utils/helper';
export default {
  components: {
    files,
    parties
  },
  computed: {
    ...mapGetters({
      container: 'containers/container',
    }),
  },
  filters: {
    formatBytes,
  },
  methods: {
    handleDate,
    moment(date) {
      return moment(date).format('YYYY-MM-DD hh:mm');
    }
  }
};
</script>
