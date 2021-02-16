<template>
  <div class="hello">
    <h1>{{ msg }}</h1>  
    <h2>{{message.toLocaleUpperCase()}}</h2>
    <!-- <button class="btn btn-primary" v-if="state==='default'" @click="changeState('edit')">Add</button>
    <button class="btn btn-danger" v-else @click="changeState('default')">Cancel</button> -->
    <div>
      <div>
        <input type="text" v-model="newItem" v-on:keyup.enter="items.push(newItem)">
        <button @click="addItems">Add Item</button>
      </div>
      <div>
        <input type="text" v-model="message">
        <ul v-for="item in items" :key="item">
          <li>{{item}}</li>
        </ul>
      </div>
    </div>
    <a v-bind:href="newItem" target="_blank">Dynamic Link</a>
   <!-- <p v-if="items.length === 0">Congrats..You have bought everything from the list!!</p> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
    state:'default',
    message : 'ready',
    newItem : '',
    items : [
      // '10 cups',
      // '20 chocolates',
      // '30 biscuits'
    ]    
    }
  },
  methods:{
    addItems:function(){
      this.items.push(this.newItem);
      this.newItem = ''
    },
    changeState:function(newState){
      this.state = newState;
      this.newItem = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
