<template>
  <Layout>
    <Tabs class-prefix="types" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      type:{{type}}
      <br>
      interval:{{interval}}
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  &.selected {
    background: white;
    font-weight: bold;

    &::after {
      display: none;
    }
  }
}
</style>

<script lang="ts">
import Types from '@/components/Types.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tabs, Types}
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>