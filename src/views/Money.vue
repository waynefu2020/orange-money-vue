<template>
  <Layout class-prefix="layout">
    <div class="numberPad">
      <div class="output">￥100</div>
      <div class="buttons clearfix">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">OK</button>
        <button class="zero">0</button>
        <button class="dot">.</button>
      </div>
    </div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>

    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="添加备注...">
      </label>
    </div>
    <div class="tags">
      <div class="new">
        <button>新增标签</button>
      </div>
      <ul class="current">
        <li>衣服</li>
        <li>住房</li>
        <li>饮食</li>
        <li>交通</li>
        <li>衣服</li>
        <li>住房</li>
        <li>饮食</li>
        <li>交通</li>
        <li>衣服</li>
        <li>住房</li>
        <li>饮食</li>
        <li>交通</li>
        <li>衣服</li>
        <li>住房</li>
        <li>饮食</li>
        <li>交通</li>
        <li>衣服</li>
        <li>住房</li>
        <li>饮食</li>
        <li>交通</li>
      </ul>

    </div>
  </Layout>
</template>

<script lang="ts">
export default {
  name: "Money",
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    padding: 9px 16px;
    text-align: right;
  }

  .buttons {
    @extend %clearFix;
    flex-wrap: wrap;

    > button {
      font-size: 22px;
      font-weight: bold;
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;

      &.ok {
        height: 64*2px;
        float: right;
        color: white;
        font-weight: normal;
      }

      &.zero {
        width: 50%;
      }

      &:nth-child(1) {
        background: #fff7e6;
      }

      &:nth-child(2), &:nth-child(5) {
        background: #ffe7ba;
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: #ffd591;
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: #ffc069;
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: #ffa940;
      }

      &:nth-child(14) {
        background: #fa8c16;
      }

      &:nth-child(12) {
        background: #d46b08;
      }
    }
  }
}

.types {
  background: #ffd591;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}

.notes {
  background: #f5f5f5;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}

.tags {
  display: flex;
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      border-radius: 12px;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
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