<template>
    <div>
        <ul>
            <li v-for="name in names" v-text="name"></li>
        </ul>
        <input v-model="newname">
        <button @click="addname">addname</button>
        <router-link to="/child">childpage</router-link>       
    </div>

</template>

<script>
  export default {
      name:'listupdate',      
      data () {
          return {
              newname : '',
              names : ['shenba', 'sudar'],
              
          }
      },methods: {
                  addname : function(){
                     this.names.push(this.newname);
                     this.newname = ''
                  }
              },
       
  }
</script>