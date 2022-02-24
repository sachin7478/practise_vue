<template>
    <div class="card card-primary mt-5">
        <div class="h4">Add Product</div>
        <form @submit.prevent="insertProduct" method="post">
            <input type="text" v-model="prod.name" placeholder="Product Name" /><br/><br/>
            <input type="text" v-model="prod.price" placeholder="Price" /><br/><br/>
            <input type="submit" value="Insert Product" />
        </form>
    </div>
</template>
<script>
export default {
    name:'AddProduct',
    data(){
        return{
            prod:{name:'Sachin',price:'7789789',sold:false}
        }
    },
    methods:{
        insertProduct() {
            if( '' == this.prod.name || '' == this.prod.price ) {
                return;
            }
            this.$store.dispatch('insertNewProduct', this.prod)
            this.prod={name:'',price:'',sold:false}
        }
    }
}
</script>