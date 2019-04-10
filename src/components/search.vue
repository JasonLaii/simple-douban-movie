<template>
  <div class="search" v-loading="searchLoading">
    <searchTag v-for="(subject,index) in searchList.subjects" :key="index" :subject="subject"></searchTag>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  mounted(){
    // this.$store.dispatch('getSearchMovie');
  },
  computed:{
    searchLoading(){
      return this.$store.getters.searchLoading
    },
    searchList(){
      // console.log("1")
      // console.log(this.$store.getters.searchList)
      return this.$store.getters.searchList
    }
  },
  components:{
    searchTag: resolve =>{
      require(["./common/searchTag"],resolve)
    }
  }
};
</script>

<style scoped>

</style>
