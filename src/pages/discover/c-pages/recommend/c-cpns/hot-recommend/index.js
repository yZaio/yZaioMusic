import React, {memo, useEffect} from 'react'
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import { getHotRecommendAction } from "../../store/actionCreators";

import ZYThemeHeaderRcm from "components/theme-header-rcm";
import ZYSongsCover from "components/songs-cover";

import { Content } from "./style";


const ZYHotRecommend =  memo(function(props) {

  const dispatch = useDispatch()


  const { hotRecommend } = useSelector(state => ({
    hotRecommend: state.getIn(['recommend','hotRecommend'])
  }),shallowEqual)
  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  },[dispatch])

  return (
    <Content>
      <ZYThemeHeaderRcm title='热门推荐' list={['华语','流行','摇滚','民谣','电子']}></ZYThemeHeaderRcm>
      <div className={'hotRecommendContain'}>
        {
          hotRecommend.map((item,index) => {
            return (
              <ZYSongsCover key={item.id} song={item} index={index}></ZYSongsCover>
            )
          })
        }
      </div>

    </Content>
  )
})
export default ZYHotRecommend
