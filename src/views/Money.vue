<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    {{ record }}
  </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/NumberPad.vue';
import Types from '@/components/Types.vue';
import Notes from '@/components/Notes.vue';
import Tags from '@/components/Tags.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

type Record = {
  tags: string[],
  notes: string,
  type: string
  amount: number
}

@Component({components: {NumberPad, Types, Notes, Tags}})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '娱乐'];

  record: Record = {tags: [], notes: '', type: '-', amount: 0};

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>