<template>
<h1>Emit</h1>
<input type="text" :value=number>
<button @click="sendEmitsNumber">CLICK</button>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits();
const number = ref(11);

function sendEmitsNumber() {
  emit("fuckingClicked", number.value)
  console.log(number.value)
}

</script>