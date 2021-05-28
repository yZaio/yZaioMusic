import React, { memo } from 'react'
import {NavLink} from "react-router-dom";

import { AppHeader } from "./style";

import { headerLinks } from "common/local-data";

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

const ZyAppHeader =  memo(function(props) {


  const topLink = (item,index) => {
    if(index < 3) {
      return(
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>

      )
    } else {
      return (
        <a href={item.link}>{item.title}</a>
      )
    }
  }


  return (
    <AppHeader>
      <div className="content wrap-v1">
        <div className="left">
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          {
            headerLinks.map((item,index) => {
              return (
                <div className='selectItem' key={item.title}>
                  {topLink(item, index)}
                </div>
              )
            })
          }
          {/*<div className='selectItem'>*/}
          {/*  <NavLink to='/'>发现音乐</NavLink>*/}
          {/*</div>*/}
          {/*<div className='selectItem'>*/}
          {/*  <NavLink to='/mine'>我的音乐</NavLink>*/}
          {/*</div>*/}
          {/*<div className='selectItem'>*/}
          {/*  <NavLink to='/friend'>朋友</NavLink>*/}
          {/*</div>*/}
          {/*<div className='selectItem'>*/}
          {/*  <a href='https://music.163.com/store/product'>朋友</a>*/}
          {/*</div>*/}
          {/*<div className='selectItem'>*/}
          {/*  <a href='https://music.163.com/nmusician/web/index#/'>朋友</a>*/}
          {/*</div>*/}
          {/*<div className='selectItem'>*/}
          {/*  <a href='https://music.163.com/#/download'>朋友</a>*/}
          {/*</div>*/}

        </div>
        <div className='right'>
          <Input placeholder="音乐/视频/电台/歌手" className='search' prefix={<SearchOutlined/>}></Input>
          <div className={'creator'}>创作者中心</div>
          <div className={'login'}>登录</div>
        </div>
      </div>
    </AppHeader>
  )
})
export default ZyAppHeader
