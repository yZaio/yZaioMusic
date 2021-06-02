import React, { memo } from 'react'

import ZYEmptyPage from "components/empty-page";

const ZYArtist =  memo(function(props) {
  return (
    <div>
      <ZYEmptyPage title='ZY歌手'></ZYEmptyPage>
    </div>
  )
})
export default ZYArtist
