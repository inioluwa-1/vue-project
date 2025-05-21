<template>
    <h1>Dynamic Route</h1>
    <div v-for="blog in allblogs" :key="blog.blog_id">
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.blog_content.slice(0,70) }}.....</p>
        <img src="https://www.shutterstock.com/shutterstock/photos/1276023355/display_1500/stock-photo-hands-holding-young-plants-on-the-arid-soil-and-cracked-ground-or-dead-soil-in-the-nature-park-of-1276023355.jpg" alt="" class="image">
        <router-link @click="storeuser(blog)" :to="{name:'blogview', params:{id:blog.blog_id, title:blog.title}}">Read more.....</router-link>
    </div>

    
</template>

<script>
export default {
    methods: {
        storeuser(blog){
            localStorage.setItem('blogdetail', JSON.stringify(blog));
            console.log(blog)
        }
        
    },

data() {
    return {
        allblogs: [{blog_id:1, title:'Education', blog_content: 'Education Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing.'},
        {blog_id:2, title:'Agriculture', blog_content: 'Agriculture Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing.'},
        {blog_id:3, title:'Medical', blog_content: 'Medical Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing.'},
        {blog_id:4, title:'Media', blog_content: ' Media Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing.'},
        {blog_id:5, title:'Housing', blog_content: 'Housing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, vitae! Lorem ipsum dolor sit amet consectetur adipisicing.'}
        ]
    }
}, mounted() {
    localStorage.setItem('allblogdetails', JSON.stringify(this.allblogs));
    // console.log(localStorage['allblogdetails']);
    
}
}
</script>

<style>
.image{
    width: 100px;
    height: 70px;
}
</style>