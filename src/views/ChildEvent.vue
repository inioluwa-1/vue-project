<template>
  <div class="child-container">
      <div class="chat-container">
        <h1>Child View</h1>
      <div class="chat-header">
        <h2>Chat with Parent</h2>
      </div>
      <div class="chat-body">
        <ul>
          <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
        </ul>
      </div>
      <div class="chat-footer">
        <input type="text" v-model="message" placeholder="Enter your message">
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['messages'],
  emits: ['newMessage'],
  data() {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage() {
      this.$emit('newMessage', this.message)
      this.message = ''
    }
  }
}
</script>

<style>
.child-container {
  width: 80%;
  margin: 40px auto;
  /* padding: 20px; */
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.chat-container {
  width: 100%;
  margin: 40px auto;
  height: 500px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

</style>


<!-- <template>
  <div>
     <span>Child component:</span> {{ count }}
    <button @click="increaseCount" class="btn btn-outline-primary"> Add</button>
  </div>
</template>

<script>
export default {
   data() {
       return {
           count: 0
       }
       
   },
    methods: {
        increaseCount() {
            this.count++

            this.$emit('Increasecount', this.count)
        }
    }
}       
</script>

<style>

</style> -->