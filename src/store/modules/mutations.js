// import types from "./types";
import * as types from "./types";

const mutations = {
  //电影名
  [types.MOVING_TITLE](state, { title }) {
    state.title = title;
  },
  //正在上映的城市
  [types.MOVIE_CITY](state, { city }) {
    state.city = city;
  },
  [types.MOVING_LOADING](state, { loadingMoving }) {
    state.loadingMoving = loadingMoving;
  },
  //上映的电影列表
  [types.MOVING_LIST](state, { movingList }) {
    state.movingList = movingList;
  },
  //搜索等待
  [types.SEARCH_LOADING](state, { searchLoading }) {
    state.searchLoading = searchLoading;
  },
  //top250等待
  [types.LOAD_TOP250](state, { ranking250 }) {
    state.ranking250 = ranking250;
  },
  [types.PAGE_START](state, { start }) {
    state.start = start;
  },
  [types.PAGE_LOAD](state, { pageload }) {
    state.pageload = pageload;
  },
  [types.SEARCH_TEXT](state, { searchText }) {
    state.searchText = searchText;
  },
  [types.SEARCH_LIST](state, { searchList }) {
    state.searchList = searchList;
  },
  [types.UP_COMBODY](state, { upcomBody }) {
    state.upcomBody = upcomBody;
  },
  [types.MOVING_ID](state, { id }) {
    state.id = id;
  },
  [types.UP_COMING](state, { loadingUpComing }) {
    state.loadingUpComing = loadingUpComing;
  },
  [types.MOVIE_COMMENT](state, { movieComment }) {
    state.movieComment = movieComment;
  },
  [types.DETAIL_LOADING](state, { loadingDetail }) {
    state.loadingDetail = loadingDetail;
  },
  [types.MOVING_DETAIL](state, { movieDetail }) {
    state.movieDetail = movieDetail;
  },
  [types.MaxNum](state, { maxNum }) {
    state.maxNum = maxNum;
  },
  [types.TOP250_LOADING](state, { top250loading }) {
    state.top250loading = top250loading;
  }
};
// export default {
//   mutations
//   // mutations:{
//     // [types.MOVING_TITLE](state, { title }) {
//     //   state.title = title;
//     // },
//     // //正在上映的城市
//     // [types.MOVIE_CITY](state, { city }) {
//     //   state.city = city;
//     // },
//     // [types.MOVING_LOADING](state, { loadingMoving }) {
//     //   state.loadingMoving = loadingMoving;
//     // }
//   // }

// };
export default mutations;
