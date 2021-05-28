import request from './request';

//推荐界面的顶部轮播图
export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

//推荐界面的热门推荐
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

//推荐界面的新碟上架
export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}

//推荐界面的榜单
export function getTopList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx
    }
  })
}
