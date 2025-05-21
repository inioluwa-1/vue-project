<template>
  <h1>How are you, <span>{{ newUser.username }}?</span></h1>
</template>

<script>
export default {
    data() {
        return {
            newUser: JSON.parse(localStorage.getItem('activeUser')) 
        }
    }
}
</script >

<style>

</style>
