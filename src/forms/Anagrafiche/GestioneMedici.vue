<template>
  <MainLayout title="Gestione medici">
    <button @click="provaHttpClient">asd</button>
    
  </MainLayout>
</template>

<script setup>
  import MainLayout from '@/Layouts/MainLayout.vue';
</script>

<script>


export default {
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
    /*
    this.$axios.post('prova' , {
      //data
    } , 
    { 
      //timeout: 20000
    })
    */
  }
}
</script>