<template>
    <h1>Child View</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, mollitia porro. Harum dicta alias repellat, perspiciatis ab maiores minus reprehenderit corporis voluptas vitae, quos assumenda esse accusantium. Nisi nulla reiciendis inventore optio blanditiis at a cumque dolorem obcaecati. Provident id debitis corrupti fuga quo libero quis aperiam nobis laboriosam inventore?</p>
    
    <p>{{ msg }}</p>
    <p>{{ Firstname }}</p>
    <button @click="checkbtn">check</button>
</template>

<script>
export default {
props: ['msg', 'Firstname'],
methods: {
    checkbtn() {
        alert(this.Firstname);
    }
},
data() {
    return {
    Msg: ''       
    }
}
}
</script>

<style>

</style>