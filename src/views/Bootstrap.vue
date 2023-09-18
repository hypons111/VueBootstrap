<template>
  <div class="container">
    <h1>This is an Bootstrap page</h1>
    <button class="btn btn-primary btn-lg" type="button">
      <font-awesome-icon :icon="['fas', 'phone']" />
    </button>
    <BootstrapComponent />
  </div>
</template>
    
    
<script lang="ts">
import { defineComponent } from "vue";
import BootstrapComponent from "@/components/BootstrapComponent.vue";

export default defineComponent({
  components: {
    BootstrapComponent,
  },
  setup() {},
});
</script>

<style scoped></style>