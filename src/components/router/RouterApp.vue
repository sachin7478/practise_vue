
<template>
<div class='appContainer'>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a  class="navbar-brand">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link to='/practise' class="nav-link">Practise</router-link>
      </li>
      <li class="nav-item">
        <router-link to='/about/100' class="nav-link">About_param</router-link>
      </li>
      <li class="nav-item">
        <router-link to='/about' class="nav-link">About</router-link>
      </li>
      <li class="nav-item">
        <router-link to='/dynamic' class="nav-link">Dynamic component</router-link>
      </li>
    </ul>
  </div>
</nav>
    <router-view></router-view>
</div>

</template>
<script>
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

    export default {
        name:'RouterApp'
    }


</script>

<style>
  #app, .appContainer { text-align: center; color: #3f3b44; font-size:19px;  }
  .container{display:flex;justify-content: center}
  input{height:22px; margin:5px}
  .bgGreen{background-color: aquamarine}
  .cBlue{color:rgb(27, 12, 158)}
  .cRed{color:red}
</style>