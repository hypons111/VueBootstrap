<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="item in studentData.header" :key="item" scope="col">
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in studentData.body" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const studentData = ref({
      header: ["#", "Name", "Age"],
      body: [
        { id: 1, name: "Mark", age: 10 },
        { id: 2, name: "Jacob", age: 10 },
        { id: 3, name: "Larry", age: 10 },
      ],
    });

    return {
      studentData,
    };
  },
});
</script>

