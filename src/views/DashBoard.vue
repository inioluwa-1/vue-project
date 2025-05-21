<template>
  <h1>hi, <span>{{ currentUser.fullname }}</span></h1>
</template>

<script>
export default {
    data() {
        return {
            currentUser: JSON.parse(localStorage.getItem('presentUser')) 
        }
    }
}
</script >

<style>

</style>