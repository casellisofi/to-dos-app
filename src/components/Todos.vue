
<template> 
    <div>
       
        <div v-bind:key="todo.id" v-for="todo in todoslist"> 
            <TodoItem v-bind:todo="todo" v-on:delete-todo="$emit('delete-todo', todo.id)" />
                
        </div>
    </div>
</template>

<script>
 //atachea el id de cada elemento y con v-for recorre el arreglo donde estan los elementos

        //especifica el componente TodoItem 
//importa el componente TodoItem donde se encuentra la estructura de cada elemento
import TodoItem from './TodoItem';

    export default {
        name: 'Todos',
        props: ['todoslist'],
        components:{TodoItem}
    }
</script>

<style></style>