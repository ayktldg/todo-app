<template>
  <div class="mt-4">
    <h2 class="text-center">Todo List</h2>
    <TheTodoList />
  </div>
</template>
<script>
import TheTodoList from "../components/TheTodoList";
export default {
  name: "List",
  components: {
    TheTodoList,
  },
};
</script>