import React, { memo } from 'react'

import noLogin from 'assets/img/noLogin.png'

import {
  LoginWrapper
} from "./style";

const ZYLogin =  memo(function(props) {
  return (
    <LoginWrapper style={{height: '500px'}}>
      {/*<h2>ZYLogin</h2>*/}
      {/*<div>aaaaaaaaaaaaa</div>*/}
      <img src={noLogin} alt=""/>
      <h2>此功能需要进行登录哦</h2>
    </LoginWrapper>
  )
})
export default ZYLogin
