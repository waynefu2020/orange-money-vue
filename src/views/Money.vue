<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Types/>
    <Notes/>
    <Tags :data-source="tags"/>
  </Layout>
</template>

<script lang="ts">
  import NumberPad from "@/components/NumberPad.vue";
  import Types from "@/components/Types.vue";
  import Notes from "@/components/Notes.vue";
  import Tags from "@/components/Tags.vue";

  export default {
    name: "Money",
    components: {NumberPad, Types, Notes, Tags},
    data(){
      return {
        tags: ['衣','食','住','行','娱乐']
      }
    },
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>