import React, { memo } from 'react'

import ZYEmptyPage from "components/empty-page";

const ZYAlbum =  memo(function(props) {
  return (
    <div>
      <ZYEmptyPage title='ZY新碟上架'></ZYEmptyPage>
    </div>
  )
})
export default ZYAlbum
