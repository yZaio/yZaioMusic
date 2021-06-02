import React, { memo } from 'react'

import ZYEmptyPage from "components/empty-page";


const ZYSongs =  memo(function(props) {
  return (
    <div>
      <ZYEmptyPage title='ZY歌单'></ZYEmptyPage>
    </div>
  )
})


export default ZYSongs
