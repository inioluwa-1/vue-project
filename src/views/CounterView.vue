<template>
    <h1>Counter</h1>
    <h2>{{ counter.count }}</h2>
    <button @click="incrementCounter">Increment</button>
</template>

<script>
import { useCounterStore } from '@/stores/counter'
export default {
 data() {
    return {
        counter:useCounterStore()

    }
 },
 methods: {
    incrementCounter() {
        this.counter.increment()
        
    }
 }
}
</script>

<style>

</style>