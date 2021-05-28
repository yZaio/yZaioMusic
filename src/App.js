import React, { memo } from 'react'

import { HashRouter } from 'react-router-dom';
import { renderRoutes } from "react-router-config";

import routes from "./router";

import ZyAppHeader from "./components/app-header";
import ZyAppFooter from 'components/app-footer'
import ZYAppPlayFooter from "pages/player/app-player-footer";



export default memo(function App() {
  return (
    <div>
      <HashRouter>
        <ZyAppHeader></ZyAppHeader>
        {renderRoutes(routes)}
        <ZyAppFooter></ZyAppFooter>
        <ZYAppPlayFooter></ZYAppPlayFooter>
      </HashRouter>
    </div>
  )
})
