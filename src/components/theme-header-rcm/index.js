import React, { memo } from 'react'

import {ThemeHeaderRcm} from "./style";

const ZYThemeHeaderRcm =  memo(function(props) {
  const { title , list = [] } = props
  console.log(list)

  return (
    <ThemeHeaderRcm>
      <div className={'left'}>
        <i className={'sprite_02'}></i>
        <h2 className={'title'}>{title}</h2>
        <div className={'listContain'}>
          {
            list.map((item,index) => {
              return (
                <span className={'listItem'} key={item}>
                  <span>{item}</span>
                  { index === list.length-1 ? '' : <span>|</span> }
                </span>
              )
            })
          }
        </div>
      </div>
      <div className={'right'}>
        更多
        <i className={'sprite_02'}></i>
      </div>
    </ThemeHeaderRcm>
  )
})
export default ZYThemeHeaderRcm
