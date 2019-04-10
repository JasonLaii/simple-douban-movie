<template>
  <div class="ready-to-release-tag">
    <div class="tag">

      <div class="tag-container" v-for="(subject,index) in upComBody.subjects" :key="index" >
        <a class="tag-image" @click="gotoDetail(subject.alt)">
          <img :src="subject.images.large">
        </a>
        <div class="movie-info">
          <h3 class="title" @click="gotoDetail(subject.alt)">{{subject.title}}</h3>
          <span class="type">
            <span v-for="(genre,index) in subject.genres" :key="index">{{genre}}</span>
          </span>
          <span class="wanna-see-person">{{subject.collect_count}}人想看</span>
          <!-- <span class="preview"> <span @click="openPreview(subject.id)">预告片</span> </span> -->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url:"movie.douban.com/trailer/" + this.$store.getters.id +"/#content"
    };
  },
  computed: {
    upComBody() {
      return this.$store.getters.upcomBody;
    }

  },
  methods:{

    gotoDetail(url){
      window.open(url)
    }
  }
};
</script>
<style scoped>
.ready-to-release-tag {
  width: 950px;
  margin: 0 auto;
}
.tag {
  width: 750px;
}
.tag-container {
  width: 300px;
  padding: 20px 0;
  display: inline-block;
  border-bottom: 1px dotted gray;

}
.tag-image {
  cursor: pointer;
}
.tag-image img {
  width: 100px;
  height: 150px;
}
.movie-info{
  width: 170px;
  padding-right: 20px;
  float: right;
}
.movie-info span {
  display: block;
  font-size: 14px;
  color: gray;
  line-height: 30px;
}
.title {
  cursor: pointer;
}
.type {
}
.wanna-see-person {
}
</style>
