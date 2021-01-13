<template>
    <div class="todo" v-bind:class="{completed: todo.completed}"> 
        <div class="todo-body" >
            <input type="checkbox" 
                v-bind:checked="todo.completed ? 'checked': ''"
                v-on:change="checkTodo">
            {{todo.title}}
        </div>

        <div class="todo-actions">
            <div>
            <button v-on:click="deleteItem(todo)">Eliminar</button> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TodoItem',
        props: ['todo'],
        methods: {
            checkTodo(){
                this.todo.completed = !this.todo.completed; //permite marcar y desmarcar el checkbox
            },
            deleteItem(todo){
                if(todo.completed){
                     return this.$emit('delete-todo', todo.id); //si el checkbox esta marcado elimina el item seleccionado
                }else{
                    this.$confirm('La tarea no fue realizada, desea eliminarla?').then(() => { //si no, muestra un mensaje para confirmar si desea eliminar de todos modos 
                    return this.$emit('delete-todo', todo.id);
               })
                }
            }
        } 
    }
</script>

<style scoped>
    .todo{
        border-bottom: solid 2px #ccc;
        padding: 10px;
    }

    .todo:not(.completed):hover{
        background-color: #eee;
    }

    .completed{
        color: #76a083;
        text-decoration: line-through;
    }
    .completed .todo-body{
        text-decoration: line-through;
    }

    .todo-body, .todo-actions{
        display: inline-block;
        vertical-align: top;
    }

    .todo-body{
        width: 85%;
    }
    .todo-actions{
        padding: 0 10px;
        width: 10%;
    }

    button{
        border: none;
        border-radius: 3px;
        padding: 15px;
        background-color: #76a083;
        color: white;
    }
    button:hover{
        background-color: #da2020;
        color: white;
    }
</style>