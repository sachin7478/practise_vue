<template>
    <div>
        <AddProduct />
        <ProductList />
    </div>
</template>
<script>
import AddProduct from '@/components/vuexExample/AddProduct';
import ProductList from '@/components/vuexExample/ProductList';
export default {
    name:'vuexApp',
    components:{AddProduct,ProductList}
}
</script>