import React from 'react';
import { Redirect } from "react-router-dom";

// import ZYDiscover from "../pages/discover";
// import ZYMine from "../pages/mine";
// import ZYFriend from "../pages/friend";
// import ZYRecommend from "../pages/discover/c-pages/recommend";
// import ZYRanking from "../pages/discover/c-pages/ranking";
// import ZYDjradio from "../pages/discover/c-pages/djradio";
// import ZYArtist from "../pages/discover/c-pages/artist";
// import ZYSongs from "../pages/discover/c-pages/songs";
// import ZYAlbum from "../pages/discover/c-pages/album";

const ZYDiscover = React.lazy(_ => import("../pages/discover"))
const ZYMine = React.lazy(_ => import("../pages/mine"))
const ZYFriend = React.lazy(_ => import("../pages/friend"))
const ZYRecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"))
const ZYRanking = React.lazy(_ => import("../pages/discover/c-pages/ranking"))
const ZYDjradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"))
const ZYArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"))
const ZYSongs = React.lazy(_ => import("../pages/discover/c-pages/songs"))
const ZYAlbum = React.lazy(_ => import("../pages/discover/c-pages/album"))
const ZYLogin = React.lazy(_ => import("../pages/login"))


const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to={'/discover'}></Redirect>
    )
  },
  {
    path: '/discover',
    component: ZYDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: '/discover/recommend',
        component: ZYRecommend,
      },
      {
        path: '/discover/ranking',
        component: ZYRanking,
        meta: {
          title: '排行榜'
        }
      },
      {
        path: '/discover/djradio',
        component: ZYDjradio,
        meta: {
          title: '主播电台'
        }
      },
      {
        path: '/discover/artist',
        component: ZYArtist,
        meta: {
          title: '歌手'
        }
      },
      {
        path: '/discover/songs',
        component: ZYSongs,
        auth: "user",
        meta: {
          title: '歌曲'
        }
      },
      {
        path: '/discover/album',
        component: ZYAlbum,
        meta: {
          title: '新碟上架'
        }
      }
    ]
  },
  {
    path: '/mine',
    component: ZYMine,
    meta: {
      title: '我的音乐'
    }
  },
  {
    path: '/friend',
    component: ZYFriend,
    auth: ["admin","user"],
    meta: {
      title: '朋友'
    }
  },
  {
    path: '/login',
    component: ZYLogin,
    meta: {
      title: '登录'
    }
  },
]
export default routes;
