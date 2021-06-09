import React, {memo, useEffect} from 'react'

import ZYEmptyPage from "components/empty-page";

const ZYAlbum =  memo(function(props) {

  useEffect(() => {
    console.log(window.user.token)
  },[])

  return (
    <div>
      <ZYEmptyPage title='ZY新碟上架'></ZYEmptyPage>
    </div>
  )
})
export default ZYAlbum
