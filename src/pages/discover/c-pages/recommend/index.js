import React, {memo} from 'react'

import ZYTopBanner from "./c-cpns/top-banner";
import ZYHotRecommend from "./c-cpns/hot-recommend";
import ZYNewAlbum from "./c-cpns/new-album";
import ZYRecommendRanking from "./c-cpns/recommend-ranking";
import ZYRecommendLogin from "./c-cpns/recommend-login";

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
      <div className={'cente-content'}>
        <div className={'heart'}></div>
        <Content className={'wrap-v2'}>
          <ContentLeft>
            <ZYHotRecommend></ZYHotRecommend>
            <ZYNewAlbum></ZYNewAlbum>
            <ZYRecommendRanking></ZYRecommendRanking>
          </ContentLeft>
          <ContentRight>
            <ZYRecommendLogin></ZYRecommendLogin>
          </ContentRight>
        </Content>
      </div>
    </Recommend>
  )
})

export default ZYRecommend
