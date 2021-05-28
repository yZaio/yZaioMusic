import React, {memo, useCallback, useEffect, useRef, useState} from 'react'
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import { Carousel } from 'antd';

import {getTopBannersAction} from "../../store/actionCreators";

import { TopBanner } from "./style";

const ZYTopBanner =  memo(function(props) {
  const [currentIndex, setCurrentIndex] = useState(0)


  // 组件和redux关联: 获取数据和进行操作
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get('recommend').get('topBanners')
    topBanners: state.getIn(['recommend','topBanners'])
  }),shallowEqual)
  // state


  const dispatch = useDispatch()

  //其他hooks
  useEffect(() => {
    dispatch(getTopBannersAction())
  },[dispatch])

  const bannerChange = useCallback((from,to) => {
    // const bgImg = topBanners[to] && topBanners[to].imageUrl + '?imageView&blur=40x20'
    setCurrentIndex(to)
  },[])

  const bannerRef = useRef()

  const bgImg = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")


  return (
    <TopBanner bgImg={bgImg}>
      <div className={'content wrap-v2'}>
        <div className={'left'}>
          <Carousel effect="fade" autoplay beforeChange={bannerChange} ref={bannerRef}>
            {
              topBanners.map((item,index) => {
                return (
                  <div className={'banner-item'} key={item.imageUrl}>
                    <img src={item.imageUrl} alt=""/>
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className={'right'}></div>

        <div className={'bannerControl'}>
          <div className={'left btn'} onClick={e => bannerRef.current.prev()}></div>
          <div className={'right btn'} onClick={e => bannerRef.current.next()}></div>
        </div>
      </div>
    </TopBanner>
  )
})

export default ZYTopBanner
