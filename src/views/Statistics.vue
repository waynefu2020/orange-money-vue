<template>
  <Layout>
    <Tabs class-prefix="types" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
      <ol>
        <li v-for="(group, index) in result" :key="index">
          <h3>{{group.title}}</h3>
          <ol>
            <li v-for="item in group.items" :key="item.id" class="record">
              <span>{{tagString(item.tags)}}</span>
              <span class="notes">{{item.notes}}</span>
              <span>￥{{item.amount}}</span>
            </li>
          </ol>
        </li>
      </ol>
  </Layout>
</template>

<style lang="scss" scoped>
%item{
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title{
  @extend %item
}
.record{
  background: white;
  @extend %item
}
.notes{
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
::v-deep .types-tabs-item {
  &.selected {
    background: white;
    font-weight: bold;

    &::after {
      display: none;
    }
  }
}

::v-deep .interval-tabs-item {
  height: 38px;
  font-size: 16px;
  font-weight: bold;
}
</style>


<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';

type RecordItem = {
  tags: string[],
  notes: string,
  type: string,
  amount: number,
  createAt?: string
}
type Tag = {
  id: string,
  name: string
}
type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  tagString(tags: Tag[]){
    return tags.length === 0 ? '无' : tags.join(',')
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const {recordList} = this;
    type HashTableValue = {title:string, items: RecordItem[]}
    const hashTable: { [key: string]: HashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createAt!.split('T');
      hashTable[date] = hashTable[date] || {title:date, items:[]};
      hashTable[date].items.push(recordList[i])
    }

    return hashTable;
  }

  beforeCreated() {
    return this.$store.commit('fetchRecords');
  }

  type = '-';
  interval = 'day';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>

