<template>
  <div class="mt-4">
    <h2 class="text-center">Form Area</h2>
    <TheTodoForm />
    <notifications position="bottom center" />
  </div>
</template>
<script>
import TheTodoForm from "../components/TheTodoForm";
export default {
  name: "Form",
  components: {
    TheTodoForm,
  },
};
</script>
