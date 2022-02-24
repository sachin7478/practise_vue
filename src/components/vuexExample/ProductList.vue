<template>
<div class="card card-primary mt-5">
    <div class="h4"> <span class="text-success">Product List</span> 
    <span class="text-right" style="float: right;
    margin-right: 20px;">Total Sold:{{soldCount}}</span>
    <span class="text-right" style="float: right;
    margin-right: 20px;">Pending:{{unsoldCount}}</span>
    </div>
    <table border='1'>
        <product-li v-for="(prod, index) in allProducts" :key="index" :details='prod' :productId='index'></product-li>
    </table>
    
</div>
</template>
<script>
import ProductLi from './ProductLi'
import { mapState, mapGetters } from 'vuex';


export default {
    name:'ProductList',
    components:{ProductLi},
    computed:{
         ...mapState({allProducts:'allProducts'}),
            // OR
        // allProducts(){
        //     return this.$store.state.allProducts
        // }

        ...mapGetters({soldCount:'soldProductCount',unsoldCount:'pendingProductCount'})
          //  OR  
        // soldCount(){
        //     return this.$store.getters.soldProductCount
        // }
    },
}
</script>