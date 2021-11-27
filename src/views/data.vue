<template>
  <v-layout wrap>
      <v-flex lg3 md3 sm4 xs6 v-for="(ProductFromPig, idx) in this.HOME" :key="idx">
        <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      
    >
      <v-card-title></v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      Pig from farm
    </v-card-subtitle>

    <v-card-text class="text--primary">
     <div>ID = {{ProductFromPig.id}}</div>
      <div>Name = {{ProductFromPig.name}}</div>
       <div>MFG = {{ProductFromPig.mfg}}</div>
        <div>EXP = {{ProductFromPig.exp}}</div>
         <div>Price = {{ProductFromPig.price}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        chat
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
      </v-flex>
    </v-layout>
</template>


<script>
export default {
  data (){
    return{
    HOME:[],
    search:""
    }
  },
  created() {
    
    this.initialize();
  },
  methods: {
    async initialize() {
         
      const axios = require('axios');

    axios.get('http://selab.mfu.ac.th:7416/api/ProductFromPig').then(resp => {


    console.log(resp.data.data);
    this.HOME=resp.data.data;
    

});
    },
  },
};
</script>