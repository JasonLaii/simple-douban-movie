<template>
  <div id="app">
    <Header></Header>
    <keep-alive exclude="movieDetails">
      <router-view></router-view>
    </keep-alive>
    <foot></foot>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/header"

export default {
  name: "app",
  components: {
    // HelloWorld,
    Header,
    'foot': resolve=>{
      require(['./components/footer.vue'],resolve)
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: gray;
}
</style>
