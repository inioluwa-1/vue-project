<template>
  <div class="container">
        <h1>Log in</h1>
        <!-- message display either wrong password or user does not exist -->
        <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
           <div class="form-group mb-2">
               <label for="">User Name</label>
               <input type="email" class="form-control" name="email" v-model.trim="username">
           </div>
    
           <div class="form-group mb-2">
               <label for="">Password</label>
               <input type="password" class="form-control" name="password" v-model.trim="password">
           </div>
    
           <div class="form-group mb-2">
               <button class="btn btn-outline-primary" @click="handleLogin">Login</button>
           </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    data() {
        return {
            router: useRouter(),
            username: '',
            password: '' ,
            allusers: [],
            errorMessage: ''
        }
    },
    mounted() {
        this.allusers = JSON.parse(localStorage.getItem('alllogusers')) || [];   
        this.activeUser = JSON.parse(localStorage.getItem('activeUser'))
    },
    methods: {
        handleLogin() {
        const newUser = this.allusers.find(user => user.username === this.username && user.password === this.password)
        
        if (!newUser) {
            // Check if username exists but password is incorrect
            const existingUser = this.allusers.find(user => user.username === this.username)
            if (existingUser) {
            this.errorMessage = 'Incorrect password. Please try again.'
            } else {
            this.errorMessage = 'User does not exist. Please sign up.'
            }
            setTimeout(() => {
            this.errorMessage = ''
            }, 2000)
            return
        }
        
        // Login successful
        localStorage.setItem('activeUser', JSON.stringify(newUser))
        this.errorMessage = ''
        this.router.push(`/dash/ ${this.activeUser.username}`)
        }
    }
}
</script>

<style>

</style>