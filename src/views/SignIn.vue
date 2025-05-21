<template>
        <div class="container">
        <h1>Log in</h1>
        <!-- message display either wrong password or user does not exist -->
        <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
        <!-- <form> -->
           <div class="form-group mb-2">
               <label for="">Email</label>
               <input type="email" class="form-control" name="email" v-model.trim="email">
           </div>
    
           <div class="form-group mb-2">
               <label for="">Password</label>
               <input type="password" class="form-control" name="password" v-model.trim="password">
           </div>
    
           <div class="form-group mb-2">
               <button class="btn btn-outline-primary" @click="handleLogin">Login</button>
           </div>
        <!-- </form> -->
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    // data is a fuction that returns an object
    data() {
        return {
            router: useRouter(),
            email: '',
            password: '' ,
            allusers: [],
            errorMessage: ''
        }
    },
    mounted() {
        this.allusers = JSON.parse(localStorage.getItem('allsignupusers')) || [];   
    },
    methods: {
        handleLogin() {
           const currentUser = this.allusers.find(user => user.email === this.email && user.password === this.password);

           if (!currentUser) {
            this.errorMessage = 'user does not exist';
            // console.log('user does not exist')
            setTimeout(() => {
             this.errorMessage = '';
            }, 2000);
            return
           }

        //    console.log(currentUser.password)
           if(currentUser){
            localStorage.setItem('presentUser', JSON.stringify(currentUser));
            this.errorMessage = '';
            // console.log('logged in successfully')
            this.router.push('/dashboard')

           }
           
        }
    }
}
</script>

<style>

</style>