<template>
  <li>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <button @click="$emit('select-topic', id)">Learn More</button>
  </li>
</template>

<script>
import { defineComponent, onUpdated } from "vue";

export default defineComponent({
  name: 'knowledgeElement',
  props: ['id', 'title', 'description'],
  emits: ['select-topic'],
  setup() {
    onUpdated(() => {
      console.log('knowledge-element -> onUpdate');
    });
  }
});
</script>
