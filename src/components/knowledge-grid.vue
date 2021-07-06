<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :title="topic.title"
      :description="topic.description"
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-element>
    <button @click="$emit('update-topics')">Add Topics</button>
  </ul>
</template>
<script>
import { defineComponent, onUpdated } from "vue";
import knowledgeElement from './knowledge-element.vue';

export default defineComponent({
  name: 'knowledgeGrid',
  components: {
    knowledgeElement,
  },
  props: ['topics'],
  emits: ['select-topic', 'update-topics'],
  setup() {
    onUpdated(() => {
      console.log('knowledge-grid -> onUpdate');
    });
  }
});
</script>
