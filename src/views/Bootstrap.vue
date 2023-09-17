<template>
  <h1>This is an Bootstrap page</h1>
  <button class="btn btn-primary btn-lg" type="button">
    <font-awesome-icon :icon="['fas', 'phone']" />
  </button>
  <button class="btn btn-primary btn-lg" type="button">
    <font-awesome-icon :icon="['fas', 'user']" />
  </button>
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
