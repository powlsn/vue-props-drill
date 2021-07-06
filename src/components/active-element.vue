<template>
  <section>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </section>
</template>
<script lang="ts">
import { defineComponent, onUpdated } from 'vue'
export default defineComponent({
  name: 'activeElement',
  props: ['description', 'title'],
  setup() {
    onUpdated(() => {
      console.log('active-element -> onUpdate');
    });
  }
})
</script>
