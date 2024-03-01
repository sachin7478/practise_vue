<template>
    <div>
    <div >Child with {{ someText }}</div>
    <button @click="clickChild">Emit</button>
    </div> 
    
    
</template>
<script>
export default {
    name: 'ChildComp',
    props: {
        someText: String,
        emitFn: Function
    },
    methods: {
        clickChild: function () {
            this.$emit('emitFn', 'good morning')
        }
    }
}
</script>
<style scoped>
div {
    margin-top: 20px
}
</style>>

