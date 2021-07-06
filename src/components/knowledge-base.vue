<template>
  <section>
    <h2>Select a Topic</h2>
    <knowledge-grid 
      :topics="topics" 
      @select-topic="$emit('select-topic', $event)"
      @update-topics="$emit('update-topics', $event)"
    ></knowledge-grid>
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
  props: ['topics'],
  emits: ['select-topic', 'update-topics'],
  setup() {
    onUpdated(() => {
      console.log('knowledge-base -> onUpdate');
    });
  }
})
</script>
