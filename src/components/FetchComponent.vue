<template>
    <div>
        <hr/><button @click='postAxios'>Post Data</button><hr/>
        <h4>The listing of github users usin API</h4>
        <table>
            <tr><td>Avatar</td><td>User Name</td></tr>
            <tr v-for='user in res' :key='user.id'>
                <td><img alt='avatar' class='smallImg' v-bind:src="user.avatar_url"></td>
                <td>{{user.login}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)
export default {
    name: 'FetchComponent',
    data(){ return{res:null}},
    methods:{
        postAxios() {
            this.axios.post('http://api.github.com/user/emails',this.res)
        }
    },
    beforeMount(){
        this.axios.get('http://api.github.com/users')
        .then( response => {
            this.res=response.data;
        } )
    }
}
</script>
<style>
    .smallImg{ height:40px;width:50px}
</style>

