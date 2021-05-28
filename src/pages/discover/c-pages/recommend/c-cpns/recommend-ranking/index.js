import React, {memo, useEffect} from 'react'

import { getRankingAction } from "../../store/actionCreators";

import ZYThemeHeaderRcm from "components/theme-header-rcm";
import ZYRankingItem from "components/ranking-item";

import {
  RecommendRankingWrapper,
  RecommendRankingContent
} from "./style";
import {useDispatch, useSelector} from "react-redux";

const ZYRecommendRanking =  memo(function(props) {

  // redux hooks
  const dispatch = useDispatch()
  const {newRanking, originRanking, upRanking} = useSelector(state => ({
    newRanking: state.getIn(['recommend','newRanking']),
    originRanking: state.getIn(['recommend','originRanking']),
    upRanking: state.getIn(['recommend','upRanking'])
  }))


  //react hooks
  useEffect(() => {
    dispatch(getRankingAction(0))
    dispatch(getRankingAction(2))
    dispatch(getRankingAction(3))
  },[dispatch])

  return (
    <RecommendRankingWrapper>
      <ZYThemeHeaderRcm title='榜单'></ZYThemeHeaderRcm>
      <RecommendRankingContent>
        <ZYRankingItem info={newRanking}></ZYRankingItem>
        <ZYRankingItem info={originRanking}></ZYRankingItem>
        <ZYRankingItem info={upRanking}></ZYRankingItem>
      </RecommendRankingContent>
    </RecommendRankingWrapper>
  )
})
export default ZYRecommendRanking
