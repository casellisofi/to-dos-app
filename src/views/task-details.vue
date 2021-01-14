<template>
  <div>
    <h1>Detalles</h1>
    <ul>
      <li>
        <strong>Id: </strong>  {{ todo.id }}
      </li>
      <li>
        <strong>Titulo: </strong> {{ todo.title }}
      </li>
      <li>
        <strong>Completado: </strong>
        {{ todo.completed ? 'Completado' : 'No Completado' }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'task-details',
    data () {
      return {
        todo: {
          id: null,
          title: null,
          description: null
        }
      }
    },
    watch: {
      $route() {
        this.getTask()
      }
    },
    created() {
      this.getTask()
    },
    methods: {
      getTask() {
        this.todo = this.$route.params.todo
      }
    }
  }
</script>
