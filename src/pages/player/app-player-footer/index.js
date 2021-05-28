import React, {memo, useCallback, useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";

import { Slider } from 'antd';

import { getSizeImage,formatDate,getPlaySong } from "../../../utils/format-utils";

import { getSongDetailAction, changeLoopTyeAction } from "../store/actionCreators";

import { AppPlayerFooterWrapper } from "./style";



const ZYAppPlayFooter =  memo(function(props) {
  // redux hooks
  const dispatch = useDispatch()
  const { currentSong,loopType } = useSelector(state => ({
    currentSong: state.getIn(['player','currentSong']),
    loopType: state.getIn(['player','loopType'])
  }))

  // react hooks
  useEffect(() => {
    dispatch(getSongDetailAction(1847250546))
  },[dispatch])

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
  },[currentSong])
  //歌曲是否播放标志
  const [isPlaying, setIsPlaying] = useState(false);
  //歌曲当前时间
  const [currentTime, setCurrentTime] = useState(0);
  //歌曲进度条
  const [processValue, setProcessValue] = useState(0);
  //进度条是否在拖拽改变标志
  const [isProcessDrag, setIsProcessDrag] = useState(false);

  const audioRef = useRef()


  /*
    数据展示逻辑处理
   */
  //other handle
  // 歌手
  const showArtist = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'
  // 歌曲图片
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  // 歌曲总时间
  const duration = currentSong.dt || 0


  /*
    方法事件处理
   */

  //暂停开始播放
  const musicPlayChange = useCallback(() => {
    !isPlaying ?  audioRef.current.play() : audioRef.current.pause()
    setIsPlaying(!isPlaying)
  },[isPlaying])

  //歌曲时间更新
  const timeupdate = e => {
    if(!isProcessDrag) {
      setCurrentTime(e.target.currentTime * 1000)
      setProcessValue( e.target.currentTime * 1000 / duration * 100 )
    }

  }

  //歌曲进度拖动
  const sliderChange = useCallback(value => {
    console.log('change')
    setIsProcessDrag(true)
    const dragCurrentTime = value / 100 * duration
    setCurrentTime(dragCurrentTime)
    setProcessValue(value)
  },[duration])

  //歌曲拖动停止或者进行点击
  const sliderAfterChange = useCallback(value => {
    const endCurrentTime = value / 100 * duration
    audioRef.current.currentTime = endCurrentTime / 1000
    if(!isPlaying) {
      musicPlayChange()
    }
    setIsProcessDrag(false)
  },[duration,isPlaying,musicPlayChange])

  //循环类型切换
  const loopClick = () => {
    if(loopType === 2) dispatch(changeLoopTyeAction(0))
    else dispatch(changeLoopTyeAction(loopType + 1))
  }



  return (
    <AppPlayerFooterWrapper className="sprite_player" isPlaying={isPlaying} loopType={loopType}>
      <div className='content wrap-v2'>
        <div className='playControl'>
          <i className='sprite_player prev'></i>
          <i className='sprite_player play' onClick={e => musicPlayChange()}></i>
          <i className='sprite_player next'></i>
        </div>
        <div className='playInfo'>
          <img src={getSizeImage(picUrl,34)} alt=""/>
          <div className='detailInfo'>
            <div className='songDetail'>
              <span>{currentSong.name}</span>
              <span>{showArtist}</span>
            </div>
            <div className='process'>
              <Slider
                defaultValue={30}
                value={processValue}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className='processTime'>
                <span>{formatDate(currentTime,'mm:ss' )}</span>
                <span>/</span>
                <span>{formatDate(duration,'mm:ss')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='playOperation'>
          <div className='left'>
            <button className='sprite_player btn favor'></button>
            <button className='sprite_player btn share'></button>
          </div>
          <div className='right sprite_player'>
            <button className='sprite_player btn volume'></button>
            <button className='sprite_player btn loop'
                    onClick={e => loopClick()}
            >
            </button>
            <button className='sprite_player btn playlist'></button>
          </div>
        </div>
      </div>

      <audio ref={audioRef}
             onTimeUpdate={e => timeupdate(e)}/>
    </AppPlayerFooterWrapper>
  )
})
export default ZYAppPlayFooter
