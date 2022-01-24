<template>
  <div>
    <button @click="getData">getName</button>
    <h1>{{ newName }}</h1>
  </div>
</template>

<script>
import useName from '../hooks/http/useGetName'
import axios from 'axios'
export default {
  name: 'Async',
  data() {
    return {
      newName: 'Je',
    };
  },

  methods: {
    async getData () {
      const instance = useName()
      const res = await instance({
        url: '/user-name',
        method: 'get',
        params: {
          user: this.newName
        }})
        
        this.newName = res;
      // axios.get('http://localhost:4000/user-name', {user: this.newName})
    } 
  }
};
</script>