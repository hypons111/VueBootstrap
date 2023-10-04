<template>
  <div class="hello">
    <h1>{{ props.title }}</h1>
  </div>
</template>

<script setup>
import { vue } from "vue";

const props = defineProps({
  title: String,
});

</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
