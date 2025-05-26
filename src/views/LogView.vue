<template>
  <div class="container">
        <h1>Sign Up</h1>
        <!-- <p v-for="errorMessage in Allusers">{{ errorMessage }}</p> -->
        <form @submit.prevent="handleSubmit">
            <div class="form-group mb-2">
               <label for="">User Name</label>
               <input type="text" class="form-control" name="fullname" v-model.trim="username">
               <small v-if="usernameError" class="text-danger">{{ usernameError }}</small>
           </div>
    
           <div class="form-group mb-2">
               <label for="">Email</label>
               <input type="email" class="form-control" name="email" v-model.trim="email">
           </div>
    
           <div class="form-group mb-2">
               <label for="">Password</label>
               <input type="password" class="form-control" name="password" v-model.trim="password">
           </div>
    
           <div class="form-group mb-2">
               <button type="" class="btn btn-outline-primary">Sing Up Here</button>
           </div>
        </form>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
 const username = ref('');
 const email = ref('');
 const password = ref('');
 let Allusers = []
 const router = useRouter();
//  const errorMessage = ref('');
 const usernameError = ref('');

 onMounted(() => {
    Allusers = JSON.parse(localStorage.getItem('alllogusers')) || [];
    //  console.log('mounted');
 })

 const handleSubmit = () => {
  let obj = {
    username: username.value,
    email: email.value,
    password: password.value
  }
  
  const users = JSON.parse(localStorage.getItem('alllogusers'));
  
  // Check if users is not null
  if (users) {
    // Check if username already exists
    const existingUser = users.find(user => user.username === obj.username)
    if (existingUser) {
      // Handle error: username already exists
      usernameError.value = 'Username already exists. Please choose a different username.';
      return
    }
    
    // Check if email already exists
    const existingEmail = users.find(user => user.email === obj.email)
    if (existingEmail) {
      // Handle error: email already exists
      emailError.value = 'Email already exists. Please choose a different email.';
      return
    }
  }
  
  Allusers.push(obj)
  localStorage.setItem('alllogusers', JSON.stringify(Allusers))
  
  if (localStorage['alllogusers']) {
    router.push('/login')
  }

  console.log(Allusers);
}

//  const handleSubmit = () => {
//   let obj = {
//     username: username.value,
//     email: email.value,
//     password: password.value
//   }
  
//   const existingUser = JSON.parse(localStorage.getItem('alllogusers')).find(user => user.username === obj.username)
//   if (existingUser) {
//     usernameError.value = 'Username already exists. Please choose a different username.';
//     return
//   }
  
//   Allusers.push(obj)
//   localStorage.setItem('alllogusers', JSON.stringify(Allusers))
  
//   if (localStorage['alllogusers']) {
//     router.push('/login')
//   }

//   console.log(Allusers);
// }

</script>

<style>

</style>