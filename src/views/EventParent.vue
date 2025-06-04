<template>
  <div class="parent-container">
      <div class="chat-container">
        <h1>Parent View</h1>
      <div class="chat-header">
        <h2>Chat with Child</h2>
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
    <ChildEvent :messages="messages" @newMessage="addMessage" />
  </div>
</template>

<script>
import ChildEvent from './ChildEvent.vue'

export default {
  data() {
    return {
      message: '',
      messages: []
    }
  },
  methods: {
    sendMessage() {
      this.messages.push(`Parent: ${this.message}`)
      this.message = ''
    },
    addMessage(msg) {
      this.messages.push(`Child: ${msg}`)
    }
  },
  components: {
    ChildEvent
  }
}
</script>

<style>
.parent-container {
  width: 80%;
  display: flex;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.chat-container {
  width: 80%;
  margin: 40px auto;
  height: 500px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.chat-header {
  background-color: #f0f0f0;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.chat-body {
  padding: 20px;
}

.chat-body ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.chat-body li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.chat-footer {
  padding: 10px;
  background-color: #f0f0f0;
  border-top: 1px solid #ddd;
}

.chat-footer input[type="text"] {
  width: 80%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.chat-footer button {
  width: 20%;
  padding: 10px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.chat-footer button:hover {
  background-color: #3e8e41;
}
</style>

<!-- <template>
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

</style> -->