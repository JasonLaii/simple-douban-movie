const getters = {
  title: state =>{
    return state.title
  },
  city: state =>{
    return state.city
  },
  //正在上映的电影
  movingList : state =>{
    for(let subject of state.movingList.subjects){
      subject.rating.average = subject.rating.average / 2
    }
    return state.movingList
  },
  loadingMoving: state=>{
    return state.loadingMoving
  },
  upcomBody: state=>{
    return state.upcomBody
  },
  searchList: state=>{
    for(let subject of state.searchList.subjects){
      subject.rating.average = subject.rating.average / 2
    }
    return state.searchList
  },
  searchText: state=>{
    return state.searchText
  },
  searchLoading: state=>{
    return state.searchLoading
  },
  loadingUpComing: state=>{
    return state.loadingUpComing
  },
  pageload: state=>{
    return state.pageload
  },
  ranking250: state=>{
    return state.ranking250
  },
  start: state=>{
    return state.start
  },
  id: state=>{
    return state.id
  },

  movieDetail: state=>{
    state.movieDetail.rating.average = state.movieDetail.rating.average / 2
    return state.movieDetail
  },
  movieComment: state=>{
    return state.movieComment
  },
  loadingDetail: state=>{
    return state.loadingDetail
  },
  maxNum: state=>{
    return state.maxNum
  },
  top250loading: state=>{
    return state.top250loading
  }
}
// export default{
//  getters
//   // getters:{
//     // title: state => {
//     //   return state.title
//     // },
//     // city: state => {
//     //   return state.state.city
//     // }
//   // }

// }
export default getters