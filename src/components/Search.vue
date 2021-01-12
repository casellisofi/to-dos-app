<template>
    <div id="search-container">
        <input type="text" v-model="query" v-on:input="$emit('query-change', query)" placeholder="Buscar una tarea">
    </div>
</template>

<script>
export default {
    name: 'Search',
    data(){
        return {
            query: ''
        }
    }
}
</script>

<style scoped>
    #search-container{
        width: 700px;
        margin: 10px auto;
    }

    input{
        font-size: 17px;
        padding: 10px;
        width: 100%;
        outline: none;
        
    }
</style>