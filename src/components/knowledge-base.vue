<template>
  <section>
    <h2>Select a Topic</h2>
    <knowledge-grid />
  </section>
</template>
<script>
import { defineComponent, onUpdated } from 'vue';
import knowledgeGrid from './knowledge-grid.vue';

export default defineComponent({
  name: 'knowledgeBase',
  components: {
    knowledgeGrid,
  },
  setup() {
    onUpdated(() => {
      console.log('knowledge-base -> onUpdate');
    });
  }
})
</script>
