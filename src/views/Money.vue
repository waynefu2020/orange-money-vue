<template>
  <Layout class-prefix="layout">
    {{ record }}
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="formItem">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"/>
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/NumberPad.vue';
import Types from '@/components/Types.vue';
import FormItem from '@/components/FormItem.vue';
import Tags from '@/components/Tags.vue';
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const recordList = recordListModel.fetch();

type RecordItem = {
  tags: string[],
  notes: string,
  type: string,
  amount: number,
  createAt?: Date
}


@Component({components: {NumberPad, Types, FormItem, Tags}})
export default class Money extends Vue {
  tags = window.tagList;
  recordList: RecordItem[] = recordList;
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    recordListModel.create(this.record)
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save();
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.formItem {
  padding: 10px 0;
}
</style>