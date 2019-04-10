import Vue from 'vue'
import Router from 'vue-router'
import Released from './components/released.vue';
import ReadyToRelease from './components/readyToRelease.vue';
import Top250 from './components/top250.vue';
import MovieDetails from './components/common/movieDetails.vue';
import Search from './components/search.vue';

Vue.use(Router)
export default new Router({
  linkActiveClass : 'active',
  mode : 'history',
  routes :[
    {
      path : '/released',
      name : 'released',
      component : Released
    },{
      path : '/readyToRelease',
      name : 'readyToRelease',
      component : ReadyToRelease
    },{
      path : '/top250',
      name : 'top250',
      component : Top250
    },{
      path : '/movieDetails',
      name : 'movieDetails',
      component : MovieDetails
    },{
      path : '/search',
      name : 'search',
      component : Search
    },{
      path : '/',
      name : 'index',
      component : Released
    }
  ]
})