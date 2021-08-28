<template>
  <h1>{{ content.name }}</h1>
</template>
<script>
import { reactive } from 'vue'
export default {
  setup() {
    const content = reactive({
      name: "Hello word"
    });
    console.log(content);
    // change content 
    content.name = "change content"
    return {
      content
    }
  }
}
</script>
