<template>
  <div>
    <p class="hello">
      This is first template
      <span>{{ age ? age : "" }} {{ newName ? newName : "" }}</span>
      <button @click="updateParentData">Update Parent Data</button>
    </p>
  </div>
</template>
<script>
export default {
  name: "HelloTemplate",
  props: {
    age: Number,
    newName: String,
  },
  methods: {
    updateParentData() {
      this.$emit("updateParent", "Success changed parent data");
    },
  }, // this.$el return actual template dom node
  beforeMount() {
    //console.log(this.$el); // undefined
  },
  mounted() {
    //console.log(this.$el); // gives actual dom node
  },
};
</script>
<style scoped>
.hello {
  background-color: rgb(63, 56, 56);
  padding: 20px;
  margin: 5px;
  font-size: 19px;
  color: rgb(247, 161, 2);
}
.hello span {
  color: rgb(0, 255, 157);
}
</style>
