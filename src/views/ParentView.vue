<template>
    <h1>Parent View</h1>
    <div class="col-10 mx-auto shadow">
        <div class="row p-3">
            <div class="col-5 ">
                <ChildView msg="hello world" :Firstname="firstname"/>
            </div>
            <div class="col-5">
                <!-- <DynamicRoute /> -->
                 <input type="text" class="form-control" v-model="firstname">
            </div>
        </div>
        </div>
    <!-- <main>
        <ChildView />
    </main> -->
</template>

<script >
import ChildView from './ChildView.vue';
import DynamicRoute from './DynamicRoute.vue';


export default {
    data () {
        return {
            firstname:''
        }
    },
    components: {
        ChildView,
        // DynamicRoute
    }
}
</script>

<style>

</style>
