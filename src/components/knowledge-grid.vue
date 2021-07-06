<template>
  <div>
    <ul>
      <knowledge-element
        v-for="topic in topics"
        :key="topic.id"
        :id="topic.id"
        :title="topic.title"
        :description="topic.description"
      ></knowledge-element>
    </ul>
    <button @click="update()">Update Topics</button>
  </div>
</template>
<script>
import { useStore } from "../store/store";
import { defineComponent, onUpdated } from "vue";
import knowledgeElement from './knowledge-element.vue';

export default defineComponent({
  name: 'knowledgeGrid',
  components: {
    knowledgeElement,
  },
  setup() {
    const store  = useStore();
    const topics = store.getTopics;
    const update = store.updateTopics;

    onUpdated(() => {
      console.log('knowledge-grid -> onUpdate');
    });

    return { topics, update }
  }
});
</script>
