import React, {memo} from 'react'

import {getSizeImage,getCount} from "../../utils/format-utils";

import {SongsCoverWrapper} from "./style";

const ZYSongsCover = memo(function (props) {
  const {picUrl, playCount, name, copywriter, nickname} = props.song

  return (
    <SongsCoverWrapper topImg={getSizeImage(picUrl, 140)} index={props.index }>
      <div className={'cover-top'}>
        <div className={'bottomContain sprite_covor'}>
          <i className={'sprite_icon'}></i>
          <span>{getCount(playCount)}</span>
          <i className={'sprite_icon'}></i>
        </div>
      </div>
      <div className={'cover-title text-nowrap'}>{name}</div>
      <div className={'cover-source text-nowrap'}>
        by {copywriter || nickname}
      </div>
    </SongsCoverWrapper>
  )
})
export default ZYSongsCover
