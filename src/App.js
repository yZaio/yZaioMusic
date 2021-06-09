import React, { memo, Suspense } from 'react'

import { HashRouter, withRouter } from 'react-router-dom';

// import {renderRoutes} from "react-router-config";
import {renderRoutes} from "utils/renderRoutes";

import routes from "./router";

import ZyAppHeader from "./components/app-header";
import ZyAppFooter from 'components/app-footer'
import ZYAppPlayFooter from "pages/player/app-player-footer";



const App = function (props) {

  return (
    <div>
      <HashRouter>
        <ZyAppHeader></ZyAppHeader>
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes,'')}
        </Suspense>
        <ZyAppFooter></ZyAppFooter>
        <ZYAppPlayFooter></ZYAppPlayFooter>
      </HashRouter>
    </div>
  )
}

export default withRouter(memo(App))
