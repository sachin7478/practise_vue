<template>
    <div>
        Hi {{ myName }}
        <br />
        <button @click="increament">Count {{ cnt }}</button>
        <child-comp someText="toChild" @emitFn="emiting_fun"/>
    </div>
</template>
<script>
import ChildComp from './ChildComp.vue'
export default {
    name: 'NewPractise',
    components: {ChildComp},
    props: {},
    data: function () { return { myName: 'Sachin', cnt: 0, toChild: "Hi this is child" } },
    watch: {
        cnt: function (newVal, oldVal) {
            console.log(`old - ${oldVal}, New - ${newVal}`)
        }
    },
    methods: {
        increament: function() {
            this.cnt++
            console.log(this)
        },
        emiting_fun: function (ele ='') {
            console.log('emit success ' + ele)
        }
    },
    mounted() {
        this.cnt = 0
    }

}
</script>