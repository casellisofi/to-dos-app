<template>
    <div id="add-container">
        <form @submit="addTodo">
            <input type="text" v-model="title" placeholder="Ingrese una tarea nueva">
        </form>
    </div>
</template>

<script>

//importa libreria de vue que genera id aleatorios
import { uuid } from 'vue-uuid';

export default {
    name: 'TodoAdd',
    data(){
        return {
            title: ''
        }
    },
    methods:{
        addTodo(e){
            e.preventDefault();

            const newTodo = {
                id: uuid.v4(), 
                title: this.title,
                completed: false
            };

            this.title = '';
            this.$emit('add-todo', newTodo);
        }
    }
}
</script>

<style scoped>
    #add-container{
        padding: 10px;
    }
    input{
        padding: 10px;
        outline: none;
        border: solid 1px #ccc;
        width: 100%;
    }
</style>