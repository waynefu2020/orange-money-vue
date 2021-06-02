<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
  import Icon from "@/components/Icon.vue";

  export default {
    name: "Nav",
    components:{Icon}
  }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
  nav{
    display: flex;
    flex-direction: row;
    box-shadow: 0 0 3px rgba(0,0,0,0.15);
    font-size: 12px;
    > .item{
      padding: 2px 0;
      width: 33.3333333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .icon{
        height: 28px;
        width: 28px;
      }
    }
    > .item.selected{
      color: $color-highlight;
    }
  }
</style>