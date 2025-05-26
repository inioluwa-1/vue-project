<template>
  <div>
     <span>Child component:</span> {{ count }}
    <button @click="increaseCount" class="btn btn-outline-primary"> Add</button>
    <!-- <button></button> -->
  </div>
</template>

<script>
export default {
   data() {
       return {
           count: 0
       }
       
   },
    methods: {
        increaseCount() {
            this.count++

            this.$emit('Increasecount', this.count)
        }
    }
}       
</script>

<style>

</style>