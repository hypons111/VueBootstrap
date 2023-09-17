<template>
  <h1>This is an Bootstrap page</h1>
  <BootstrapComponent />
</template>
    
    
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BootstrapComponent from "@/components/BootstrapComponent.vue";

@Options({
  components: {
    BootstrapComponent,
  },
})
export default class Bootstrap extends Vue {}
</script>
