<template>
    <h4>Welcome to Vue 3, {{ name }}</h4> <br>
    <p>the number is {{ num }}</p> 

    <button v-on:click="increaseNum">Increase</button>
    <!-- @click  -->
<!-- loops rendering -->
    <ul v-for="student in students" :key="student">
        <li>{{ student }}</li>
    </ul>

    <!-- Conditional statements -->
     <span v-if="day === 'wednesday'">Today is Wednesday</span>
     <span v-else-if="day === 'monday'">The day is actually monday</span>
     <span v-else>The day is {{ day }}</span>
     <span>{{ date }}</span>

    <span v-show="day === 'monday'">yes, it is monday</span>

     <span>{{ day === 'wednesday' ? '': '' }}</span>

     <div class="div d-flex align-items-center justify-content-center" :class="condition ? 'bg-success': 'bg-danger'">
        <button class="btn btn-dark" @click="condition = !condition">change color</button>
     </div>

     <input :type="show ? 'text' : 'password'" class="form-control" v-model="userInput">
     <button class="btn btn-light " @click="show = !show"> {{ show ? 'hide' : 'show' }}</button>
     <br>
     <span>{{ userInput }}</span>

     <button class="btn btn-black px-2" @click="goToAbout">Go to about</button>

     <button class="btn btn-outline-dark mx-2" @click="back">back</button>
     <button class="btn btn-outline-dark mx-2" @click="next">next</button>
</template>
<!-- composition api use setup -->
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const name = 'George';
const num = ref(0); 
const students = ['George🦁', 'Kenny🐈‍⬛', 'Dotun🐆', 'Davido🐐'];
const day = "monday";
const date = new Date();

const condition = ref(false);

const show = ref(false);

const userInput = ref('');

const increaseNum = () => {
    num.value++;
}

const router = useRouter();

const back = () => {
    router.go(-1) 
}

const next = () => {
    router.go(1)
}

// programmatic redirection
const goToAbout = () => {
    router.push('/about-us');
    // router.push({name: 'about'});
}
</script>

<style>
.div {
    width: 300px;
    height: 300px;
}
</style>