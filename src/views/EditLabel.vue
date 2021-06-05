<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="tag.name"
                @update:value="update"
                field-name="标签名" placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';
import FormItem from '@/components/FormItem.vue';
import Button from '@/components/Button.vue';
@Component({
  components: {Button, FormItem}
})
export default class EditLabel extends Vue {
  tag?: {id:string, name: string} = undefined;

  created() {
    const id = this.$route.params.id;
    const tags = tagListModel.data;
    const tag = tags.filter(t => t.id === id)[0];
    if(tag){
      this.tag = tag
    } else {
      this.$router.replace('/404')
    }
  }
  update(name: string){
    if(this.tag){
      tagListModel.update(this.tag.id, name)
    }
  }
  remove(){
    if(this.tag){
      tagListModel.remove(this.tag.id)
    }
  }
  goBack(){
    this.$router.back()
  }
}
</script>

<style lang="scss" scoped>
  .navBar{
    font-size: 16px;
    padding: 12px 16px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .title{}
    > .leftIcon{
      width: 20px;
      height: 20px;
    }
    > .rightIcon{
      width: 20px;
      height: 20px;
    }
  }
  .form-wrapper{
    margin-top: 8px;
    background: white;
  }
  .button-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
</style>