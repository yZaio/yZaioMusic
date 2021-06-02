import React, { memo } from 'react'

import ZYEmptyPage from "components/empty-page";

const ZYRanking =  memo(function(props) {
  return (
    <div>
      <ZYEmptyPage title='ZY排行榜'></ZYEmptyPage>
    </div>
  )
})
export default ZYRanking
