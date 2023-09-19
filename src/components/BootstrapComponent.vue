<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="item in props.tableData.header" :key="item" scope="col">
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in props.tableData.body" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td v-if="item.subject">{{ item.subject }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineComponent, ref } from "vue";

const props = defineProps({
  tableData: Object, // 唔指定型別都可以，咁就乜都可以接。
});
</script>

