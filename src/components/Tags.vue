<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          @click="toggle(tag)"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
      >
        <div class="iconWrapper">
          <Icon name="food" class="icon"/>
        </div>
        <span class="name">{{ tag.name }}</span>
      </li>
    </ul>

  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import {TagHelper} from '@/mixins/TagHelper';
import {defaultExpenseTags, defaultIncomeTags} from '@/constants/defaultTags';

@Component
export default class Tags extends mixins(TagHelper) {
  defaultExpenseTags = defaultExpenseTags;
  defaultIncomeTags = defaultIncomeTags;
  selectedTags: string[] = [];
  get tagList(){
    return this.$store.state.tagList;
  }

  created() {
    this.$store.commit('fetchTags');
  }

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);

  }

  create() {
    const name = window.prompt('请输入标签名：');
    if (!name) {return window.alert('标签名不能为空');}
    this.$store.commit('createTag', name);
  }
}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  flex-direction: column-reverse;
  background: white;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      background: #d9d9d9;
      $h: 40px;
      height: $h;
      border-radius: 12px;
      padding: 6px 12px;
      margin-right: 14px;
      margin-top: 4px;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      > .iconWrapper{
        > .icon{
          width: 30px;
          height: 30px;
        }
      }
      > .name{
        font-size: 14px;
        padding: 6px 0;
        background: transparent;
        color: #707070;
      }

      &.selected {
        background: #ffd591;
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      border-bottom: 1px solid;
      color: #999;
      padding: 0 4px;
    }
  }

  &.selected {
  }
}

</style>