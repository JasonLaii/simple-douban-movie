<template>
  <div class="douban-header">
    <div class="header-container">
      <div class="douban-search">
        <a href="/" class="tittle">豆瓣电影</a>
        <div class="search-container">
          <el-input placeholder="请输入电影" v-model="content">
            <el-button slot="append" class="el-icon-search" @click="searchMovie"></el-button>
          </el-input>
        </div>
      </div>
      <div class="douban-image">
        <img src="../../public/image/annual_2018.png">
      </div>
    </div>

    <div class="douban-header-bar">
      <ul>
        <li v-for="bar in barList" :key="bar.id" @click="gotoUrl(bar.title)">
          <router-link :to="bar.url" :class="title === bar.title ?'active':''">{{bar.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "正在热映",
      content: "",
      barList: [
        {
          title: "正在热映",
          id: 1,
          url: "/released"
        },
        {
          title: "即将上映",
          id: 2,
          url: "/readyToRelease"
        },
        {
          title: "Top250",
          id: 3,
          url: "/top250"
        }
      ]
    };
  },
  methods: {
    gotoUrl(title) {
      this.title = title;
    },
    searchMovie() {
      this.$store.commit("SEARCH_TEXT", { searchText: this.content });
      this.$store.commit("SEARCH_LOADING", { searchLoading: true });
      this.$store.dispatch("getSearchMovie");
      this.$router.push({
        path: "search",
        query: { searchText: this.content }
      });
    }
  },
  computed: {

  }
};
</script>
<style scoped>
.douban-header {
  width: 100%;
  background: #f0f3f5;
}
.douban-search {
  width: 950px;
  margin: 0 auto;
  height: 90px;
  /* border-bottom: 1px solid rgba(192, 192, 192, 0.932);  */
}
.tittle {
  color: #5b99be;
  font-weight: bold;
  font-size: 30px;
  line-height: 90px;
}
.search-container {
  display: inline-block;
  margin-left: 70px;
  width: 500px;
  line-height: 90px;
}
.search-container input {
  height: 34px;
}
.douban-image {
  position: absolute;
  /* padding-top: 20px; */
  top: 14px;
  right: 250px;
}
.douban-image img {
  width: 204px;
  height: 100px;
}

.douban-header-bar {
  width: 950px;
  margin: 0 auto;
  height: 40px;
}
.douban-header-bar li {
  float: left;
  list-style: none;
  cursor: pointer;
}
.douban-header-bar li a {
  padding: 8px;
  font-size: 12px;
  display: inline-block;
}

.douban-header-bar li a:hover {
  font-weight: bold;
  color: #5b99be;
}
.active {
  font-weight: bold;
  color: #5b99be;
}
</style>

