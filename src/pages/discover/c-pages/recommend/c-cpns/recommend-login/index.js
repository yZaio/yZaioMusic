import React, { memo } from 'react'

import {Button, Popconfirm} from "antd";

import {RecommendLoginWrapper,} from "./style";


const ZYRecommendLogin =  memo(function(props) {

  const loginClick = () => {

  }

  return (
    <RecommendLoginWrapper>
      <Popconfirm  title="登录功能敬请期待">
        <Button type="primary"
                danger
                size='large'
                onClick={e => loginClick()}
        >立即登录</Button>
      </Popconfirm>

    </RecommendLoginWrapper>
  )
})
export default ZYRecommendLogin
