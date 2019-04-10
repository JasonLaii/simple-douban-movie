# 这是用 Vuex 写的一个简单版豆瓣电影的项目

## 这个项目所用到的技术有 Vue，vue-cli,Vuex,vue-router,axios，element-ui

##### 这个项目包括了查看几个不同城市的最近热门电影，即将上映的电影，top250 的电影，点击电影可以查看电影详情以及按关键字搜索电影的功能

### 首先我们要安装依赖

```bash
#安装vue-cli
npm install @vue/cli

#安装 vue-router
npm install vue-router --save

#安装axios
npm install axios --save

#安装框架 element-ui
npm install element-ui --save

#创建vue-cli项目
vue create project-name
#选择默认
>default(bable,eslint)

```

## 安装完依赖之后，我们需要在 main.js 引入模块

```javascript
import Vue from "vue";
import App from "./App.vue";
import element from "element-ui";
import router from "vue-router";
import axios from "axios";
import store from "./store";

//引入element-ui框架
Vue.use(element);
//为Vue添加axios方法
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  router,
  //在这里挂载store，因为我们之后会创建一个store存储仓
  store
}).$mount("#app");
```

因为我们用到了豆瓣 api 的跨域，因此我们需要在 webpack 使用 proxyTable 来代理跨域，我们在根目录下创建 vue.config.js 文件,然后进行配置

```javascript
// vue.config.js
//配置成以下的样子当我们要访问 "http://localhost:8080/api/movie/in_theaters"的时候
//就会直接转到 "http://api.douban.com/v2/movie/in_theaters" 这样我们就可以访问豆瓣的api数据了
module.exports = {
  devServer: {
    // port: 8080,
    // host: "127.0.0.1",
    proxy: {
      "/api": {
        target: "https://api.douban.com/v2",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
```

之后我们就创建项目的存储仓 store
以下是 store 的结构

```
|--store
|  |--modules               //存放store模块的文件夹
|  |  |--state.js           //存放数据源
|  |  |--types.js           //事件类型type
|  |  |--getters.js         //获取数据
|  |  |--mutations.js       //改变数据的方法
|  |  |--actions.js         //改变数据的方法
|  |--index.js              //打包模块，模块的出口
```

然后让我们看一下所有的组件

```
|--components
|  |--common                        //共同组件
|  |  |--movieDetails.vue           //电影详情
|  |  |--movieTag.vue               //热映电影
|  |  |--readyToReleaseTag.vue      //即将上映电影
|  |  |--searchTag.vue              //搜索电影块
|  |--header.vue                    //头组件
|  |--footer.vue                    //页脚组件
|  |--readyToRelease.vue            //即将上映电影组件
|  |--released.vue                  //热映电影组件
|  |--search.vue                    //搜索组件
|  |--top250.vue                    //top250组件
```

之后让我们配置路由表

```javascript
import Vue from "vue";
import Router from "vue-router";
//当然还要引入模块,此处省略
Vue.use(Router);
export default new Router({
  linkActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/released",
      name: "released",
      component: Released
    },
    {
      path: "/readyToRelease",
      name: "readyToRelease",
      component: ReadyToRelease
    },
    {
      path: "/top250",
      name: "top250",
      component: Top250
    },
    {
      path: "/movieDetails",
      name: "movieDetails",
      component: MovieDetails
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/",
      name: "index",
      component: Released
    }
  ]
});
```
接下来就是页面的编写啦，想继续了解的话可以看源码哦！

### 项目完成后我们需要最小化项目
```bash
# minimized project
npm run build
```

# 结语
##### 这次做的这个简单版豆瓣电影的项目让我初步了解了Vuex的基本思想，以及存储仓store的基本使用方法，当然我会继续练习用Vue来做项目来深入理解这个框架
#### 最后希望各位看完我这个项目后可以给我点个star啦，谢谢。
