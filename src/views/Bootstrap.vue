<template>
  <h1>This is an Bootstrap page</h1>
  <button class="btn btn-primary btn-lg" type="button">
    <font-awesome-icon :icon="['fas', 'phone']" />
  </button>
  <BootstrapComponent />
</template>
    
    
<script lang="ts">
import BootstrapComponentVue from "@/components/BootstrapComponent.vue";
import { defineComponent } from "vue";
import BootstrapComponent from "@/components/BootstrapComponent.vue";

export default defineComponent({
  components: {
    BootstrapComponent,
  },
  setup() {},
});
</script>
