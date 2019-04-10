<template>
  <div class="movieList">
    <div class="movie-container">
      <div class="movie-tag" v-for="(subject,index) in showMovieList" :key="index">
        <ul>
          <li class="film-pic"  @click="showDetails(subject.id)">
            <img :src="subject.images.large" class="movieImg" >
          </li>
          <li class="film-title" @click="showDetails(subject.id)">{{subject.title}}</li>
          <li class="film-rate">
            <el-rate v-model="subject.rating.average" disabled></el-rate>
            <span class="rateNum">{{subject.rating.average}}</span>
          </li>
          <li class="film-button" @click="funny">
            <span title="Having this function lol">特惠选座</span>
          </li>
        </ul>
      </div>
      <!-- </template> -->
      <div class="load-more" @click="loadMore">加载更多</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

      //最多显示条目
      // maxNum: 12,
    };
  },
  props: ["movieInfo"],

  computed: {
    loadingMoving() {
      return this.$store.getters.loadingMoving;
    },

    showMovieList() {
      return this.$store.getters.movingList.subjects.filter(
        (subject, index) => {
          if (index < this.$store.getters.maxNum) {
            // console.log(index + subject);
            return subject;
          }
        }
      );
    }
  },
  methods: {
    loadMore(){
      (this.$store.getters.maxNum == this.movieInfo.subjects.length) ? alert("全部加载完毕") :  this.$store.commit('MaxNum',{maxNum: this.movieInfo.subjects.length})
    },
    showDetails(id){
      this.$store.commit("DETAIL_LOADING",{loading:true})
      this.$store.commit("MOVING_ID",{id:id})
      this.$router.push({
        path: './movieDetails',
        query:{id:id}
      })
      this.$store.dispatch('getMoviesDetail')
    },
    funny(){

    }
  }
};
</script>

<style scoped>
.movie-container {
  width: 950px;
}
.movie-tag {
  padding: 20px 10px;
  display: inline-flex;
  flex-direction: row;
}
.movie-tag ul {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.film-pic img {
  width: 160px;
  height: 260px;
}
.film-pic, .film-title{
  cursor: pointer;
}
.film-title {
  text-align: center;
}
.film-rate div {
  display: inline-block;
}
.film-button {
  text-align: center;
  width: 100px;
  line-height: 24px;
  background-color: #268dcd;
  color: white;
  border-radius: 2px;
  margin-top: 8px;
  cursor: help;
}
.load-more {
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  width: 950px;
  background-color: gray;
  color: white;
  line-height: 40px;
  margin: 10px 0;
  cursor: pointer;
}
</style>
