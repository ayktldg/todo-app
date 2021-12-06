<template>
  <div class="row mt-4 ml-auto mr-auto w-50 d-flex flex-column">
    <div class="col-sm-4 mb-3 pl-0">
      <label class="d-flex">
        Show:
        <select v-model="selected" class="form-control form-control-sm ml-2">
          <template v-for="status in Object.keys(STATUSSES)">
            <option
              :value="STATUSSES[status].VALUE"
              :key="STATUSSES[status].VALUE"
              >{{ STATUSSES[status].TEXT }}</option
            >
          </template>
        </select>
      </label>
    </div>
    <template v-if="todos.length">
      <transition-group name="list" mode="out-in">
        <div v-for="todo in todos" :key="todo.id">
          <div v-cardClass="`${todo.status}`">
            <div class="card-header d-flex flex-row">
              <h5>{{ todo.title }}</h5>
              <router-link
                :to="{
                  name: 'UpdateTodoForm',
                  params: { todo: todo, id: todo.id },
                }"
                tag="button"
                class="btn btn-sm text-dark btn-light ml-auto"
                >Edit</router-link
              >
            </div>
            <div class="card-body">
              <p class="card-text">{{ todo.description }}</p>
            </div>
          </div>
        </div>
      </transition-group>
    </template>
    <template v-else>
      <h4 class="text-center">
        There are no elements in the list. Go to form for adding new one or
        <router-link tag="a" to="/add-new" class="text-info">click</router-link>
        here.
      </h4>
    </template>
  </div>
</template>
<script>
import { STATUSSES } from "../statusses";
export default {
  name: "TheTodoList",
  data() {
    return {
      STATUSSES,
      selected: STATUSSES.ALL.VALUE,
    };
  },
  computed: {
    todos() {
      if (this.selected !== STATUSSES.ALL.VALUE) {
        return this.$store.getters.getTodos.filter(
          (todo) => todo.status === this.selected
        );
      } else {
        return this.$store.getters.getTodos;
      }
    },
  },
};
</script>
<style scoped>
.list-enter,
.list-leave-active {
  opacity: 0;
  transform: translateX(50px);
}
.list-enter-active,
.list-leave {
  transition: all 0.5s;
}
</style>
