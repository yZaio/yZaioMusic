import React, {memo} from 'react'

import ZYTopBanner from "./c-cpns/top-banner";
import ZYHotRecommend from "./c-cpns/hot-recommend";
import ZYNewAlbum from "./c-cpns/new-album";
import ZYRecommendRanking from "./c-cpns/recommend-ranking";

import {
  Recommend,
  Content,
  ContentLeft,
  ContentRight
} from "./style";

const ZYRecommend =  memo(function(props) {

  return (
    <Recommend>
      <ZYTopBanner></ZYTopBanner>
      <Content className={'wrap-v2'}>
        <ContentLeft>
          <ZYHotRecommend></ZYHotRecommend>
          <ZYNewAlbum></ZYNewAlbum>
          <ZYRecommendRanking></ZYRecommendRanking>
        </ContentLeft>
        <ContentRight></ContentRight>
      </Content>
    </Recommend>
  )
})

export default ZYRecommend
