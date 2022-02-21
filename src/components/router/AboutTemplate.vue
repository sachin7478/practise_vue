<template>
<h3>About {{id}}</h3>
</template>
<script>
    export default {
        name:'AboutTemplate',
        data(){ return{
            id : this.$route.params.id
        }}
    }
</script>