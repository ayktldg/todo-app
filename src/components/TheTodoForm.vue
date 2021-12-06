<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)">
      <div class="row m-4 justify-content-center">
        <div class="col-sm-6">
          <div class="form-group">
            <label>Title</label>
            <ValidationProvider
              name="title"
              mode="passive"
              rules="required"
              v-slot="{ errors }"
            >
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Please enter title"
                v-model="todoForm.title"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label>Description</label>
            <ValidationProvider
              name="description"
              mode="passive"
              rules="required"
              v-slot="{ errors }"
            >
              <input
                type="textarea"
                class="form-control form-control-sm"
                placeholder="Please enter description"
                v-model="todoForm.description"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label>Status</label>
            <ValidationProvider
              name="status"
              mode="passive"
              rules="required"
              v-slot="{ errors }"
            >
              <select
                class="form-control form-control-sm"
                name="status"
                v-model="todoForm.status"
              >
                <template v-for="status in Object.keys(STATUSSES)">
                  <option
                    :value="STATUSSES[status].VALUE"
                    :key="STATUSSES[status].VALUE"
                    >{{ STATUSSES[status].TEXT }}</option
                  >
                </template>
              </select>
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <button
            type="submit"
            class="btn btn-sm col"
            :class="isUpdate ? 'bg-warning' : 'bg-secondary text-light'"
          >
            {{ isUpdate ? "Update" : "Add New" }}
          </button>
        </div>
      </div>
    </form>
  </ValidationObserver>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
import { STATUSSES } from "../statusses";
export default {
  name: "TheTodoForm",
  data() {
    return {
      todoForm: {
        id: "",
        title: "",
        description: "",
        status: "",
      },
      STATUSSES,
      isUpdate: false,
    };
  },
  methods: {
    onSubmit() {
      if (!this.isUpdate) {
        this.generateId();
        this.$store.dispatch("addTodo", this.todoForm);
        this.$notify({
          text: "Your todo has been successfully added!!",
          type: "success",
        });
      } else {
        this.$store.dispatch("updateTodo", this.todoForm);
        this.$notify({
          text: "Your todo has been successfully updated!!",
          type: "warn",
        });
        this.$router.push("/add-new");
        this.isUpdate = false;
      }
      this.clearForm();
    },
    generateId() {
      this.todoForm.id = uuidv4();
    },
    clearForm() {
      this.todoForm = {
        id: "",
        title: "",
        description: "",
        status: "",
      };
    },
  },
  created() {
    if (this.$route.name === "UpdateTodoForm") {
      this.isUpdate = true;
      this.todoForm = { ...this.$route.params.todo };
    }
  },
};
</script>
