<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    {{ recordList }}
  </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/NumberPad.vue';
import Types from '@/components/Types.vue';
import Notes from '@/components/Notes.vue';
import Tags from '@/components/Tags.vue';
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import model from '@/model';

const recordList: RecordItem[] = model.fetch();

type RecordItem = {
  tags: string[],
  notes: string,
  type: string,
  amount: number,
  createAt?: Date
}


@Component({components: {NumberPad, Types, Notes, Tags}})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '娱乐'];
  recordList: RecordItem[] = recordList;
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    const record2: RecordItem = model.clone(this.record);
    record2.createAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChange() {
    model.save(this.recordList);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>