<template>
  <div>
    <h6 class="mb-3">Document containers</h6>
    <vue-good-table
        @on-row-click="onRowClick"
        :columns="columns"
        :pagination-options="{
          enabled: true,
          perPage: 5
        }"
        :rows="containers">
      <template slot="table-row" slot-scope="props">
        <ul class="list-inline" v-if="props.column.field === 'parties'">
          <li v-for="party in props.row.parties" :key="party.id" class="list-inline-item">
            {{ party.user.username }}
          </li>
        </ul>
        <span v-else-if="props.column.field === 'size'">
          {{ props.row.size | formatBytes }}
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>

import {mapGetters} from "vuex";
import { formatBytes, handleDate }  from '@/utils/helper';
export default {
  data() {
    return {
      columns: [
        {
          label: 'Container name',
          field: 'name',
        },
        {
          label: 'Parties',
          field: 'parties',
          sortable: false,
        },
        {
          label: 'Size',
          field: 'size',
          sortable: false,
        },
        {
          label: 'Date',
          field: 'createdAt',
          type: 'date',
          formatFn(value) {
            return handleDate(value);
          }
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      containers: 'containers/containers',
    }),
  },
  filters: {
    formatBytes,
  },
  methods: {
    onRowClick(params) {
      this.$router.push({ name: 'container', params: { id: params.row.id } })
    },
  }
};
</script>
