import React, { memo } from 'react'

import ZYEmptyPage from "components/empty-page";

const ZYMine =  memo(function(props) {
  return (
    <div>
      <ZYEmptyPage title='ZY我的音乐'></ZYEmptyPage>
    </div>
  )
})
export default ZYMine
