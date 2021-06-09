import React, { memo } from 'react'

import { Discover } from "./style";

import { dicoverMenu } from "common/local-data";
import {NavLink} from "react-router-dom";
// import {renderRoutes} from "react-router-config";
import {renderRoutes} from "utils/renderRoutes";

const ZYDiscover =  memo(function(props) {
  const {route} = props;

  return (
    <Discover>
      <div className={'top'}>
        <div className={'menu wrap-v1'}>
          {
            dicoverMenu.map((item,index) => {
              return (
                <div className={'item'} key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </div>

      </div>

      {renderRoutes(route.routes,'')}

    </Discover>
  )
})
export default ZYDiscover
