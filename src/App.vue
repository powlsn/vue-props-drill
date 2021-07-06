<template>
  <div>
    <active-element />
    <knowledge-base />
  </div>
</template>

<script>
import { defineComponent, onUpdated } from 'vue';
import knowledgeBase from "./components/knowledge-base.vue";
import activeElement from "./components/active-element.vue";
import { initStore } from './store/store';

export default defineComponent({
  components: {
    knowledgeBase,
    activeElement,
  },
  setup() {
    initStore();

    onUpdated(() => {
      console.log('App -> onUpdated');
    });
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
