<template>
  <div class="container">
    <h1>Props</h1>
    <button
      class="btn btn-primary btn-lg"
      type="button"
      @click="switchTableData('teacher')"
    >
      Teacher
    </button>
    <button
      class="btn btn-primary btn-lg"
      type="button"
      @click="switchTableData('student')"
    >
      Student
    </button>

    <!-- :tableData 同子組件props接收名稱要一樣 -->
    <!-- "tableData" 係父組件傳俾子組件參數 -->
    <BootstrapComponent :tableData="tableData" />
  </div>
</template>
    
    
<script setup>
import { defineComponent, ref } from "vue";
import BootstrapComponent from "@/components/BootstrapComponent.vue";

const studentData = ref({
  tableName: "student",
  header: ["#", "Name", "Age"],
  body: [
    { id: 1, name: "Mark", age: 10 },
    { id: 2, name: "Jacob", age: 10 },
    { id: 3, name: "Larry", age: 10 },
  ],
});
const teacherData = ref({
  tableName: "teacher",
  header: ["#", "Name", "Age", "Subject"],
  body: [
    { id: 1, name: "Peter", age: 38, subject: "Maths" },
    { id: 2, name: "Paul", age: 42, subject: "PE" },
    { id: 3, name: "Mary", age: 28, subject: "Music" },
  ],
});
const tableData = ref(studentData.value);

function switchTableData(name) {
  switch (name) {
    case "teacher":
      tableData.value = teacherData.value;
      break;
    case "student":
      tableData.value = studentData.value;
      break;
  }
}
</script>

<style scoped></style>