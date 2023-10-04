<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <MainComponent :title="string" />
  </div>
</template>

<script setup>
import { Vue, ref } from "vue";
import MainComponent from "@/components/MainComponent.vue"; // @ is an alias to /src

const string = ref("Main Page");

</script>
