import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList
} from "services/recommend";
import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUMS,
  CHANGE_UP_RANKING,
  CHANGE_ORIGIN_RANKING,
  CHANGE_NEW_RANKING
} from "./constants";

const changeTopBannersAction = res => ({
  type: CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendAction = res => ({
  type: CHANGE_HOT_RECOMMEND,
  hotRecommend: res.result
})

const changeNewAlbumsAction = res => ({
  type: CHANGE_NEW_ALBUMS,
  newAlbums: res.albums
})

const changeUpRankingAction = res => ({
  type: CHANGE_UP_RANKING,
  upRanking: res.playlist
})


const changeOriginRankingAction = res => ({
  type: CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})


const changeNewRankingAction = res => ({
  type: CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

/*
  网络请求dispatch
 */


export const getTopBannersAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannersAction(res))
    })
  }
}

export const getHotRecommendAction = limit => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

export const getNewAlbumsAction = limit => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbumsAction(res))
    })
  }
}

export const getRankingAction = idx => {
  return dispatch => {
    getTopList(idx).then(res => {
      // dispatch(changeRankingAction(res))
      switch (idx) {
        case 0:
          dispatch(changeNewRankingAction(res))
          break
        case 2:
          dispatch(changeOriginRankingAction(res))
          break
        case 3:
          dispatch(changeUpRankingAction(res))
          break
        default:
      }
    })
  }
}
