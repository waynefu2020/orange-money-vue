<template>
    <button class="button" @click="$emit('click', $event)">
      <slot/>
    </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Button extends Vue {

}
</script>

<style lang="scss" scoped>
.button {
  background: #fa8c16;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 0 16px;
  height: 40px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>