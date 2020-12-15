<template>
  <div> 
    <div id="header">
      <Search v-on:query-change="querySearch" />
    </div>

    <div id="main-container">
      <h2>To-dos App</h2>
      <TodoAdd v-on:add-todo="addTodo"/>
      <Todos v-bind:todoslist="copyTodos" v-on:delete-todo="deleteTodo" />

    </div>
  </div>
</template>

<script>
//import components 
import Search from './components/Search';
import Todos from './components/Todos';
import TodoAdd from './components/TodoAdd';

//integrar componentes en la app
export default {
  name: 'App',
  components: {
    Todos, TodoAdd, Search
  },

//  ----METODOS----
  methods: {
    //Eliminar
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id != id); //regresa todos los elementos menos el id que recibio
      this.copyTodos = [...this.todos];
    },
    //Agregar
    addTodo(todo){
      this.todos.push(todo);
      this.copyTodos = [...this.todos];
    },
    //Buscar
    querySearch(query){
      if(query.trim() === ''){
        this.copyTodos = [...this.todos];
      }else{
        const temp = this.todos.filter(todo =>{
          return todo.title.includes(query)
        });

        this.copyTodos = [...temp];
      }
    }
  },

  // -----DATA-----
  data(){
    return {
      //arreglo donde se encuentran las tareas (elementos)
      todos: [ 
        {
          id: 0,
          title:  'Entrenar',
          completed: false
        },
        {
         id: 1,
         title: 'Leer',
         completed: true
       },
       {
         id: 2,
         title: 'Estudiar',
         completed: false
       },
       {
         id: 3,
         title: 'Cocinar',
         completed: false
       }
      ],
      copyTodos: [] //define otro arreglo
    }
  },
  //función que duplica el arreglo, copyTodos tiene la misma estructura que todos
  created(){ 
    this.copyTodos = [...this.todos];
  }
}
</script>


<style>
  *{
    box-sizing: border-box;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    padding: 0;
    margin: 0;
  }

  #main-container{
    border: solid 1px #ccc;
    width: 600px;
    margin: 100px auto;
    
  }

  #header{
    background: black;
    padding: 10px;
  }

  h2{
    color: white;
vertical-align: middle;
    padding: 0 10px;
    background: black;
  }
</style>
