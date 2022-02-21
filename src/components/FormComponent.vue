<template>
    <div class='formContainer'>
        <div v-if='errors.length'>
            <li v-for='e in errors' :key='e.id'>{{e}}</li>
        </div>
        <div v-else>
            <li>Login Success</li>
        </div>
        <form @submit.prevent="validateData"> <!--prevent i.e. prevent default-->
            <input type='text' v-model='user.username' placeholder="Enter Username"/><br/><br>
            <input type='password' v-model='user.password' placeholder="Enter Password"/><br/><br>
            <label for='chess'> <input class="chk" value='chess' type='checkbox' v-model='user.hobbies' id='chess'/> Chess  </label>
            <label for='cricket'> <input class="chk" value='cricket' type='checkbox' v-model='user.hobbies' id='cricket'/> Cricked  </label><br/><br>
            <label for='male'> <input class="chk" value='male' type='radio' v-model='user.gender' id='male' name='gender'/> Male  </label>
            <label for='female'> <input class="chk" value='female' type='radio' v-model='user.gender' id='female' name='gender'/> Female  </label><br/><br>
            <input type='submit' value='Submit'/>
        </form>
    </div>
</template>
<script>
    export default {
        name:'FormComponent',
        data(){ return{
            user:{username:null,password:null,hobbies:[],gender:null},
            errors:[]
        }},
        methods:{
            validateData(){
                this.errors=[];
                if( !this.user.username || !this.user.password || !this.user.hobbies.length || !this.user.gender ) {
                    this.errors.push('Some Fields missing');
                } else {
                    this.signUp();
                }
            },
            signUp(){
                console.log('Signing Up')
            }
        }
    }

</script>
<style scoped>
    .formContainer{
        min-height: 200px; margin:3px; border:1px solid grey; background-color: azure;
    }
    .chk{ height: 14px;  width: 15px;  }
    li{
        list-style: none; color:blue;
    }
</style>