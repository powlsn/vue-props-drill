import { computed, inject, provide, reactive, ref } from "vue";
// eslint-disable-next-line
export const initStore = () => {
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

  // Getters
  const getTopics = computed(() => topics);
  const getActiveTopic = computed(() => activeTopic.value)
  
  // Actions
  const updateTopics = () => {
    topics.push({ 
      id: 'core', 
      title: 'Core', 
      description: 'a new Core feature', 
      fullText: 'Lorem ipsum dolor isi at met'
    });
  }

  const selectTopic = (id: string) => {
    activeTopic.value = topics.find((topic) => topic.id === id);
  }

  provide('getTopics', getTopics);
  provide('getActiveTopic', getActiveTopic);
  provide('updateTopics', updateTopics);
  provide('selectTopic', selectTopic);
}

// eslint-disable-next-line
export const useStore = () => ({
  getTopics: inject('getTopics'),
  getActiveTopic: inject('getActiveTopic'),
  updateTopics: inject('updateTopics'),
  selectTopic: inject('selectTopic'),
})
