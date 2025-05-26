<template>
    <h1>Counter</h1>
</template>

<script>
import { useCounterStore } from '@/stores/counter';

export default {
 data() {
    return {
        counter: useCounterStore()
    }
 },
}
</script>

<style>

</style>