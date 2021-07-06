<template>
  <div>
    <active-element
      v-bind='activeTopic'
    ></active-element>
    <knowledge-base 
      :topics="topics" 
      @select-topic="selectTopic" 
      @update-topics="updateTopics"
    ></knowledge-base>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, reactive, ref } from 'vue';
import knowledgeBase from "./components/knowledge-base.vue";
import activeElement from "./components/active-element.vue";

export default defineComponent({
  components: {
    knowledgeBase,
    activeElement,
  },
  setup() {
    const topics = reactive(
      [
        {
          id: 'basics',
          title: 'The Basics',
          description: 'Core Vue basics you have to know',
          fullText: 'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
        },
        {
          id: 'components',
          title: 'Components',
          description: 'Components are a core concept for building Vue UIs and apps',
          fullText: 'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
        }
      ]
    );
    const activeTopic = ref();

    const selectTopic = (id: string) => {
      activeTopic.value = topics.find((topic) => topic.id === id);
    }

    const updateTopics = () => {
      topics.push({ 
        id: 'core', 
        title: 'Core', 
        description: 'a new Core feature', 
        fullText: 'Lorem ipsum dolor isi at met'
      });
    }

    onUpdated(() => {
      console.log('App -> onUpdate');
    });

    return { topics, activeTopic, selectTopic, updateTopics };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
