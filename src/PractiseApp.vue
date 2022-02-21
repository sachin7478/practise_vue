<template>
  <div id="app" style="margin-top:60px"> <!-- Single wrapped unit is required -->

  <router-view />
    <div class="container">
      <img alt="Vue logo" src="./assets/logo.png" v-bind:style="{height:'120px', width:'120px'}" /><!--style bind with object-->
      <DemoTable v-bind:users='users'/> <!--Send dynamic vlues to child-->
      <p>
        {{ inputVal ? inputVal:'' }}<br /> <!--binded value with input-->
        <input type="text" v-bind:disabled="boolFlag" v-model="inputVal"> <!--v-model to bind value with form tags-->
        <input type="checkbox" v-bind:[customAttr]="boolFlag"/> <br /> <!--binding with curtom attribute-->
        <span v-newSize="'small'">Custom Directive</span><br/>
        <span v-newSize="'medium'">Custom Directive</span><br/>
        <span v-newSize="'large'">Custom Directive</span><br/>
      </p>
      <FormComponent />
    </div>
    {{dataFromChild | toUpper}}<br /> <!--fetched data on click of update parent data--><!--Filter[toUpper] applied from root App-->
    <span v-bind:class={bgGreen:boolFlag}>Color is {{colorKey}} | Class toggle</span><br /><!--Apply class conditionaly-->
    <span v-bind:style="{color:colorKey}">count : {{count}}</span><br /> <!--Dynamic style-->
    <span v-bind:class="[boolFlag?'cRed':customClass,'bgGreen']">Flag : {{boolFlag}} | Array of class with condition</span>
    
    <HelloTemplate v-if="boolFlag" v-on:updateParent='callFromChild($event)' />   <!-- Without props & emitted function and data $event is mutable -->
    <HelloTemplate v-else age="age is : 1000 |" new-name="name is : Sachin Udmale"/>  <!--With props and else should be preceeded by v-if-->
    <button @click="increament">Increament </button> <!--Shorthand @-->
    <button v-on:click="toggle">Toggle</button><br/>
    <FetchComponent />
  </div>
</template>

<script>
  import HelloTemplate from './components/HelloTemplate.vue'; // importing child component
  import DemoTable from './components/DemoTable';
  import FormComponent from './components/FormComponent';
  import FetchComponent from '@/components/FetchComponent';

  export default {
    name: 'PractiseApp',
    components:{ HelloTemplate, DemoTable,FormComponent,FetchComponent }, // Register component
    data(){
      return { count:0, boolFlag:true, customAttr:'checked',colorKey:"red", customClass:'cBlue',
        inputVal:'',dataFromChild:'',
        users:[ { id:1, name:'sachin', email:"sachin@gmail.com"},
                  { id:2, name:'dhiraj', email:"dhiraj@gmail.com"},
                  { id:3, name:'manoj', email:"manoj@gmail.com"}, ]
      }       
    },
    methods:{
      increament(){ this.count++; },
      toggle(){ this.boolFlag = !this.boolFlag; },
      callFromChild(signal){ this.dataFromChild = signal; }
    },
    beforeCreate:function(){console.warn('1. Before create');},
    created:function(){console.warn('2. Created');},
    beforeMount:function(){console.warn('3. Before Mount');},
    mounted() {  // this method triggers after template fully mounted on to dom
      console.warn('4. Mounted');
      console.log(this.count);  // 0
      this.count = 5000;  // 5000  i.e. data can be mounted
    },
    beforeUpdate(){console.warn('Before update')},
    updated(){console.warn('Template updated')}
    
  }
</script>

