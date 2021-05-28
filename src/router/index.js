import React from 'react';
import { Redirect } from "react-router-dom";

import ZYDiscover from "../pages/discover";
import ZYMine from "../pages/mine";
import ZYFriend from "../pages/friend";
import ZYRecommend from "../pages/discover/c-pages/recommend";
import ZYRanking from "../pages/discover/c-pages/ranking";
import ZYDjradio from "../pages/discover/c-pages/djradio";
import ZYArtist from "../pages/discover/c-pages/artist";
import ZYSongs from "../pages/discover/c-pages/songs";
import ZYAlbum from "../pages/discover/c-pages/album";

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
      },
      {
        path: '/discover/djradio',
        component: ZYDjradio,
      },
      {
        path: '/discover/artist',
        component: ZYArtist,
      },
      {
        path: '/discover/songs',
        component: ZYSongs,
      },
      {
        path: '/discover/album',
        component: ZYAlbum,
      }
    ]
  },
  {
    path: '/mine',
    component: ZYMine
  },
  {
    path: '/friend',
    component: ZYFriend
  }
]
export default routes;
