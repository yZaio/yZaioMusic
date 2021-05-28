import React, {memo} from 'react'

import {getSizeImage} from "../../utils/format-utils";


import {AlbumCoverWrapper} from "./style";

const ZYAlbumCover = memo(function (props) {
  const {info,size,bgp,width} = props

  return (
    <AlbumCoverWrapper size={size + 'px'} bgp={bgp + 'px'} width={width + 'px'}>
      <div className='imgContain'>
        <img src={getSizeImage(info.picUrl, size)} alt=""/>
        <a href="todo" className='image_cover'>新碟</a>
      </div>
      <div className='album-name text-nowrap'>{info.name}</div>
      <div className='album-artist text-nowrap'>{info.artist.name}</div>
    </AlbumCoverWrapper>
  )
})
export default ZYAlbumCover
