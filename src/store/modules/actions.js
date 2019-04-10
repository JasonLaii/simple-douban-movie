import Utils from "../../util";
let utils = new Utils();

const actions = {
  //正在上映的电影信息
  getMoving({ commit, state }) {
    utils.getInfo("/movie/in_theaters", { city: state.city }).then(res => {
      commit("MOVING_LIST", { movingList: res });
      commit("MOVING_LOADING", { loadingMoving: false });
    });
  },
  //获取电影细节信息
  getMoviesDetail({ commit, state }) {
    utils.getInfo(`/movie/subject/${state.id}`, {}).then(res => {
      commit("MOVING_DETAIL", { movieDetail: res });
      commit("DETAIL_LOADING", { loadingDetail: false });
    });
  },
  //即将上映的电影列表
  getComingMovie({ commit, state }) {
    utils.getInfo(`/movie/coming_soon`, { city: state.city })
    .then(res => {
      commit("UP_COMBODY", { upcomBody: res });
      commit("PAGE_LOAD", { pageload: false });
      commit("UP_COMING", { loadingUpComing: false });
    });
  },
  //获取top250信息
  getTop250Movie({commit,state}){
    utils.getInfo(`/movie/top250`,{city:state.city})
    .then(res=>{
      commit("LOAD_TOP250", { ranking250 : res})
      commit('TOP250_LOADING', { top250loading: false })
    })
  },
  //获取搜索信息
  getSearchMovie({commit,state}){
    utils.getInfo(`/movie/search`, { q: state.searchText })
    .then(res=>{
      // console.log(res)
      commit("SEARCH_LIST", { searchList: res });
      commit("SEARCH_LOADING", { searchLoading: false })
    })
  }

};
// export default{
//   // actions:{}
//   actions
// }
export default actions;
