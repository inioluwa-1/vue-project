<template>
  <h1>Blog</h1>
    <!-- <h2>{{ getblog.blog_id }}</h2> -->
    <h2>{{title }}</h2>
    <p>{{ getblog.blog_content }}</p>

</template>

<script>
export default {
data() {
    // return {
    //     blog:JSON.parse(localStorage.getItem('blogdetail'))
    // }
    return {
        title: this.$route.params.title,
        allblogs:JSON.parse(localStorage.getItem('allblogdetails')),
    }
},
computed: {
    getblog() {
        return this.allblogs.find((blog) => blog.blog_id == this.$route.params.id );
    }
}, mounted () {
    console.log(this.getblog);   
}
}
</script>

<style>

</style>