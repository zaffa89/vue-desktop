<template>
  <MainLayout title="Main form">
    <button @click="provaHttpClient"></button>
  </MainLayout>
</template>

<script setup>
  import MainLayout from '@/Layouts/MainLayout.vue';
</script>

<script>


export default {
  name: 'MainForm',
  props: {
    msg: String
  },
  data() {
    return {
      
    }
  },
  methods: {
    provaHttpClient()
    {
        this.$axios.post('prova' , {
          //data
        } , 
        { 
          //timeout: 20000
        })
    }
  },
  mounted()
  {
    this.$axios.post('prova' , {
      //data
    } , 
    { 
      //timeout: 20000
    })
  }
}
</script>