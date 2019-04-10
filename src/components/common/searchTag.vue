<template>
  <div class="searchTag">
    <!-- 是top250还是 搜索 -->
    <!-- <template v-if="this.search">
      <h2>搜索 ---</h2>
    </template>-->

    <div class="search-tag-container">
      <a class="tag-image" @click="gotoDetail(subject.alt)">
        <img :src="subject.images.large">
      </a>
      <div class="search-tag-info">
        <h4 @click="gotoDetail(subject.alt)">{{subject.title}} ( {{subject.year}} )</h4>
        <el-rate disabled v-model="subject.rating.average" show-score></el-rate>
        <div class="type">
          <span v-for="(genre,index) in subject.genres" :key="index">
            <template v-if="!isLast(index,subject.genres.length)">{{genre}}/&nbsp;</template>
            <template v-else>{{genre}}</template>
          </span>
        </div>
        <div class="actor">
          <span v-for="(cast,index) in subject.casts" :key="index">
            <template v-if="!isLast(index,subject.casts.length)">{{cast.name}}/&nbsp;</template>
            <template v-else>{{cast.name}}</template>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // search:Boolean
    }
  },
  props:["subject"],
  // props: ["search"],
  computed: {
    ranking250() {
      return this.$store.getters.ranking250;
    }
  },
  methods: {
    //判断是否最后一个
    isLast(index, length) {
      return index < length - 1 ? false : true;
    },
    gotoDetail(url) {
      window.open(url);
    }
  }
};
</script>
<style scoped>
.searchTag {
  width: 950px;
  margin: 0 auto;
}
.search-tag-container {
  padding: 20px 0;
  /* border-bottom: 1px dashed gray; */
}
.tag-image {
  padding-right: 20px;
  cursor: pointer;
}
.tag-image img {
  vertical-align: top;
  width: 65px;
  height: 96px;
}
.search-tag-info {
  display: inline-block;
}
.search-tag-info h4 {
  cursor: pointer;
}
.actor,
.type {
  font-size: 12px;
  color: rgb(88, 87, 87);
  line-height: 16px;
}
</style>
