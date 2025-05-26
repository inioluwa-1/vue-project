<template>
  <div class="container-fluid"> 
    <div class="col-6 mx-auto shadow">
    <span>Parent component: {{ counts }}</span>
    </div>
    <div class="col-6 mx-auto shadow">
        <ChildEvent @count= "increase"/>
    </div>
</div>
</template>

<script>
import ChildEvent from './ChildEvent.vue';

export default {
components: {
    ChildEvent
}, 
data(){
    return{
        counts: 0
    }
},
methods:{
    increase(data){
        this.counts = data
    }  
}
}
</script>

<style>

</style>