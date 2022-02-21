<template>
<div id="app">
    <component v-bind:is='cmp'></component>
    <button @click='switchComponent("form_component")'>Load Form Component</button>
    <button @click='switchComponent("demo_table")'>Load Demo table component</button>
</div>
</template>
<script>
import HelloTemplate from '@/components/HelloTemplate'
import FormComponent from '@/components/FormComponent'

export default{
    name:'DynamicComponent',
    components:{
        'form_component':FormComponent,
        'demo_table':HelloTemplate
    },
    data(){
        return{
            cmp:'demo_table'
        }
    },
    methods:{
        switchComponent(item) {
            this.cmp=item
        }
    }
}
</script>