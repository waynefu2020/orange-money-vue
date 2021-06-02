<template>
  <Layout>
    <div class="tags">
      <ul class="current">
        <li>衣服</li>
        <li>住房</li>
        <li>饮食</li>
        <li>交通</li>
      </ul>
      <div class="new">
        <button>新增标签</button>
      </div>
    </div>
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text">
      </label>
    </div>
    <div>
      <ul class="types">
        <li>收入</li>
        <li>支出</li>
      </ul>
    </div>
    <div class="numberPad">
      <div class="output">￥100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>0</button>
        <button>.</button>
        <button>OK</button>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
export default {
  name: "Money",
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

</style>