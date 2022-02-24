<template>
        <tr>
            <td>
                <span :class="{strike:details.sold}">
                    {{details.name}}
                </span>
            </td>
            <td>{{details.price}}</td>
            <td><button class="btn btn-danger" @click='removeProduct(productId)'>Remove</button>
            <button class="btn btn-warning" @click='toggleSold(productId)'>Sell Toggle</button>
            </td>
        </tr>

</template>
<script>
import {mapActions} from 'vuex'
    export default{
        name:'ProductLi',
        props:['details', 'productId'],
        methods:{
            ...mapActions({
                toggleSold:'toggleSoldItem',
                removeProduct:'removeProduct'
            })
            //  OR
            // toggleSold(prodId) {
            //     this.$store.dispatch('toggleSoldItem',prodId);
            // },
            // removeProduct(prodId) {
            //     this.$store.dispatch('removeProduct',prodId);
            // },
        },
    }
</script>
<style>
.strike{
 text-decoration: line-through;
}
</style>