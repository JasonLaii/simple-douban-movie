<template>
  <div class="ready-to-release" v-loading="top250loading">
    <div class="ready-to-release-container">
      <h1 class="title">电影票 - {{city}}</h1>
      <div class="location">
        <el-dropdown @command="changeCity" trigger="click">
          <span class="el-dropdown-link">[切换城市]</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(city,index) in citys"
              :key="index"
              :command="city.name"
            >{{city.name}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <searchTag v-for="(subject,index) in ranking250.subjects" :key="index" :subject="subject"></searchTag>
  </div>
</template>
<script>
export default {
  data() {
    return {
      citys: [
        {
          name: "北京"
        },
        {
          name: "广州"
        },
        {
          name: "上海"
        },
        {
          name: "深圳"
        },
        {
          name: "杭州"
        }
      ]
    };
  },
  // props:['subject'],
  components: {
    'searchTag':resolve=>{
      require(['./common/searchTag'],resolve)
    }
  },
  computed: {
    city() {
      return this.$store.getters.city;
    },
    ranking250(){
      return this.$store.getters.ranking250
    },
    top250loading(){
      return this.$store.getters.top250loading
    }
  },
  methods: {
    changeCity(command) {
      this.$store.commit("UP_COMING", { loadingUpComing: true });
      this.$store.commit("MOVIE_CITY", { city: command });
      this.$store.dispatch('getTop250Movie')
    }
  },
  mounted() {
    this.$store.dispatch("getTop250Movie");
  }
};
</script>
<style scoped>
.ready-to-release {
  width: 950px;
  margin: 0 auto;
}
.ready-to-release-container {
  line-height: 70px;
  border-bottom: 1px solid rgba(192, 192, 192, 0.932);
}
.title,
.location {
  display: inline-block;
}
.title {
}
.location span {
  font-size: 20px;
  padding-left: 10px;
}
</style>
