<template>
  <li>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
import { useStore } from "../store/store";
import { defineComponent, onUpdated } from "vue";

export default defineComponent({
  name: 'knowledgeElement',
  props: ['id', 'title', 'description'],
  setup() {
    const store = useStore();
    const selectTopic = store.selectTopic;

    onUpdated(() => {
      console.log('knowledge-element -> onUpdate')
    });
    return { selectTopic }
  }
});
</script>
