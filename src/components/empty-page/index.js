import React, { memo } from 'react'

import { Empty } from 'antd';

import { EmptyPageWrapper } from "./style";

const ZYEmptyPage =  memo(function(props) {
  return (
    <EmptyPageWrapper>
      <h2>{props.title}</h2>
      <Empty description='功能敬请期待'></Empty>
    </EmptyPageWrapper>
  )
})
export default ZYEmptyPage
