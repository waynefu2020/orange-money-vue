<template>
  <ul class="tabs" :class="{[classPrefix+'-tabs']: classPrefix}">
    <li v-for="item in dataSource" :key="item.value"
        class="tabs-item"
        :class="liClass(item)"
        @click="select(item)"
    >{{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = { text: string, value: string }

@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array})
  dataSource!: DataSourceItem[];
  @Prop(String)
  readonly value!: string;
  @Prop(String)
  classPrefix?: string;
  liClass(item: DataSourceItem){
    return {
      selected: item.value === this.value,
      [this.classPrefix + '-tabs-item']: this.classPrefix
    };
  }

  select(item: DataSourceItem) {
    this.$emit('update:value', item.value);
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  background: #ffd591;
  display: flex;
  text-align: center;
  font-size: 16px;

  &-item {
    width: 40%;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 auto;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 40%;
      height: 2px;
      background: #333;
    }
  }
}
</style>