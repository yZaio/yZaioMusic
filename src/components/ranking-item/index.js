import React, { memo } from 'react'

import { getSizeImage } from "../../utils/format-utils";

import {
  RankingItemWrapper,
  RankingItemTop,
  RankingItemContent,
  RankingItemFooter
} from "./style";

const ZYRankingItem =  memo(function(props) {
  const {info} = props
  const { tracks = [] } = info;

  return (
    <RankingItemWrapper>
      <RankingItemTop>
        <div className='img-contain'>
          <img src={getSizeImage(info.coverImgUrl,80)} alt=""/>
          <a href="todo" className='image_cover'>榜单</a>
        </div>
        <div className='top-content'>
          <div className='rankingName text-nowrap'>
            {info.name}
          </div>
          <i className='play sprite_02'></i>
          <i className='collect sprite_02'></i>
        </div>
      </RankingItemTop>
      <RankingItemContent>
        {
          tracks.slice(0,10).map((item,index) => {
            return (
              <div className='list-item' key={item.id}>
                <div className='item-index'>{index + 1}</div>
                <div className='item-content'>
                  <div className='text-nowrap'>{item.name}</div>
                  <div className='iconContain'>
                    <i className='sprite_02 play'></i>
                    <i className='sprite_icon2 addTo'></i>
                    <i className='sprite_02 collect'></i>
                  </div>
                </div>

              </div>
            )
          })
        }
      </RankingItemContent>
      <RankingItemFooter>
        <a href="todo">查看全部 &gt;</a>
      </RankingItemFooter>
    </RankingItemWrapper>
  )
})
export default ZYRankingItem
