<template>
  <section v-if="topic">
    <h2>Active Element Title: {{ topic.title }}</h2>
    <p>{{ topic.fullText }}</p>
  </section>
</template>

<script>
import { defineComponent, onUpdated } from 'vue';
import { useStore } from '../store/store';

export default defineComponent ({
  name: 'activeElement',
  setup() {
    const store = useStore();
    const topic = store.getActiveTopic;

    onUpdated(() => {
      console.log('active-element -> onUpdated');
    })
    return { topic }
  }
});
</script>
