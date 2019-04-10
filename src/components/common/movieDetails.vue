<template>
  <div class="movie-details" v-loading="loadingDetail">
    <div class="movie-details-container">
      <div class="film-details">
        <div class="film-title">
          <span class="cn-title">{{movieDetail.title}}</span>
          <span class="original-title">{{movieDetail.original_title}}</span>
          <span class="movie-year">( {{movieDetail.year}} )</span>
        </div>

        <div class="film-info">
          <div class="film-pic">
            <img :src="movieDetail.images.large">
          </div>
          <div class="film-info-container">
            <span>
              导演 ：
              <a
                v-for="(director,index) in movieDetail.directors"
                :key="index" :href="director.alt" target="blank"
              >{{director.name}}</a>
            </span>
            <!-- <span>编剧：<a v-for="() ">{{}}</a></span> -->
            <span>
              主演 :
              <a
                v-for="(cast,index) in movieDetail.casts"
                :key="index"
                :href="cast.alt" target="blank"
              >{{cast.name}}&nbsp;&nbsp;</a>
            </span>
            <span>
              类型 :
              <a v-for="(genre,index) in movieDetail.genres" :key="index">{{genre}}&nbsp;&nbsp;</a>
            </span>
            <span>
              制片国家/地区 :
              <span
                v-for="(country,index) in movieDetail.countries"
                :key="index"
              >{{country}}&nbsp;&nbsp;</span>
            </span>
            <span>
              又名 :
              <span v-for="(ak,index) in movieDetail.aka" :key="index">{{ak}}&nbsp;&nbsp;</span>
            </span>
          </div>
        </div>
        <div class="film-rate">
          <span class="rating">豆瓣评分</span>
          <div class="rate-details">
            <span class="personNum">{{movieDetail.rating.average}}</span>
            <div class="rating-people">
              <el-rate class="rate" disabled v-model="movieDetail.rating.average"></el-rate>
              <span class="rate-people">
                <a>{{movieDetail.ratings_count}}人评论</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="film-evaluate">
        <span class="btn">想看</span>
        <span class="btn">看过</span>
        <span class="film-comment">
          评价:
          <el-rate class="stars" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" show-text></el-rate>
        </span>
      </div>
    </div>

    <div class="film-introduce">
      <div class="film-summary">
        <span class="summary-title">{{movieDetail.title}}!&nbsp;的剧情简介……</span>
        <span class="summary-content">{{movieDetail.summary}}</span>
      </div>

      <div class="film-actor">
        <span class="actor-title">{{movieDetail.title}}!&nbsp; 的演职员……</span>

        <div class="personal-info" v-for="(director,index) in movieDetail.directors" :key="index" @click="gotoAvatar(director.alt)">
          <img :src="director.avatars.large">
          <span class="personal-name">{{director.name}}</span>
          <span class="duty">导演</span>
        </div>

        <div class="personal-info" v-for="(cast,index) in movieDetail.casts" :key="index" @click="gotoAvatar(cast.alt)">
          <img :src="cast.avatars.large">
          <span class="personal-name">{{cast.name}}</span>
          <span class="duty">演员</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    movieDetail() {
      return this.$store.getters.movieDetail;
    },
    loadingDetail() {
      return this.$store.getters.loadingDetail;
    }
  },
  mounted() {
    // let id =this.$route.query.id
    // this.$store.commit("MOVING_ID",{id:id})
    // this.$store.dispatch('getMoviesDetail')
  },
  methods:{
    gotoAvatar(url){
      // this.$router.push(url);
      window.open(url);  //在新的页面打开
      // window.location.href = url  //在当前页面打开
    }
  }
};
</script>
<style scoped>
.movie-details {
  width: 950px;
  margin: 0 auto;
}
.movie-details-container {
}
.film-details {
  width: 750px;
  height: 300px;
  display: block;
}
.film-title {
  font-size: 30px;
  font-weight: bold;
  line-height: 80px;
}
.movie-year {
  color: gray;
}
.film-info {
}

.film-pic {
  float: left;
}

.film-info-container {
  border-right: 1px solid rgba(192, 192, 192, 0.932);
  float: left;
  padding: 0 20px;
  width: 280px;
  height: 200px;
}
.film-info-container span {
  font-size: 14px;
  display: inline-block;
  width: 200px;
  color: #666666;
}
.film-info-container span a {
  color: #5477aa;
  cursor:pointer;
}
.film-info-container span span{
  color: black;
  display: inline
}
.film-info-container span a:hover {
  background-color: #37a;
  color: white;
}
.film-pic img {
  width: 135px;
  height: 200px;
}

.film-rate {
  float: left;
  padding: 18px;
}
.rating {
  color: gray;
  display: inline-block;
  font-size: 14px;
}
.rate-details {
  height: 40px;
}
.personNum {
  font-size: 30px;
}
.rate {
  display: inline-block;
}
.rating-people {
  display: inline-block;
  padding: 8px;
}
.rate-people {
  font-size: 12px;
  color: #5477aa;
  display: block;
}
.rate-people a:hover {
  background-color: #37a;
  color: white;
}
.film-evaluate {
  padding: 14px 2px;
}
.btn {
  line-height: 18px;
  background-color: #ffeada;
  display: inline-block;
  border: 1px solid gray;
  border-radius: 3px;
  font-size: 12px;
  padding: 2px 10px;
  margin-right: 16px;
  cursor: pointer;
}
.film-comment {
}
.film-comment .stars {
  display: inline-block;
}
.film-introduce {
  width: 650px;
}
.flim-summary {
}
.summary-title,
.actor-title {
  display: block;
  color: #5d7747;
  font-size: 18px;
  line-height: 40px;
}
.summary-content {
  text-indent: 2em;
  display: block;
  padding: 10px 0;
  font-size: 14px;
  line-height: 18px;
}
.personal-info img {
  width: 95px;
  height: 133px;
}
.personal-info {
  float: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 20px;
}
.personal-info img{
    cursor: pointer;
}
.personal-info span {
  font-size: 12px;
  color: gray;
  text-align: center;
  display: inline-block;
  width: 95px;
}
.film-actor{
  height: 220px;
}

</style>
