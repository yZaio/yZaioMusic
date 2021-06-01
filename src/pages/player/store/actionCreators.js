import {
  CHANGE_CURRENT_SONG,
  CHANGE_LOOP_TYPE,
  CHANGE_SONG_LIST,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_LYRIC_LIST,
  CHANGE_CURRENT_LYRIC_INDEX
} from "./constants";

import {getSongDetail,getLyric} from "services/player";
import { getRandomNumber } from "../../../utils/math-utils";
import { parseLyric } from "../../../utils/parse-lyric";

//接口请求到歌曲后赋值到当前歌曲对象
const changeSongDetailAction = song => ({
  type: CHANGE_CURRENT_SONG,
  currentSong: song
})

//改变在歌曲数组里面当前歌曲索引
const changeCurrentSongIndexAction = currentSongIndex => ({
  type: CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex
})

//改变在歌曲数组
const changeSongListAction = songList => ({
  type: CHANGE_SONG_LIST,
  songList
})

//改变歌词
const changeLyricListAction = lyricList => ({
  type: CHANGE_LYRIC_LIST,
  lyricList
})


//获取歌词
const getLyricAction = id => {
  return dispatch => {
    getLyric(id).then(res => {
      dispatch(changeLyricListAction(parseLyric(res.lrc.lyric)))
    })
  }
}




//改变当前歌词index
export const changeCurrentLyricIndexAction = index => ({
  type: CHANGE_CURRENT_LYRIC_INDEX,
  index
})


//改变播放类型  循环 随机 单曲
export const changeLoopTyeAction = loopType => ({
  type: CHANGE_LOOP_TYPE,
  loopType
})

//上下切换歌曲
export const upDownSongAction = tag => {
  return (dispatch,getState) => {
    const loopType = getState().getIn(['player','loopType'])
    const currentSongIndex = getState().getIn(['player','currentSongIndex'])
    const songList = getState().getIn(['player','songList'])

    switch (loopType) {
      case 1: //随机播放
        let changeSongIndexRandom = getRandomNumber(songList.length)
        while (changeSongIndexRandom === currentSongIndex) {
          changeSongIndexRandom = getRandomNumber(songList.length)
        }
        dispatch(changeSongDetailAction(songList[changeSongIndexRandom]))
        dispatch(changeCurrentSongIndexAction(changeSongIndexRandom))
        dispatch(getLyricAction(songList[changeSongIndexRandom].id))
        break
      default: //顺序播放和单曲播放
        let changeSongIndex = currentSongIndex + tag
        if( changeSongIndex >= songList.length ) changeSongIndex = 0
        if( changeSongIndex < 0 ) changeSongIndex = songList.length - 1
        dispatch(changeSongDetailAction(songList[changeSongIndex]))
        dispatch(changeCurrentSongIndexAction(changeSongIndex))
        dispatch(getLyricAction(songList[changeSongIndex].id))

    }
  }
}

//判断是否歌曲数组存在当前歌曲  不存在的话就发送请求请求数组
export const getSongDetailAction = ids => {
  return (dispatch,getState) => {
    const songList = getState().getIn(['player','songList'])
    const songFindIndex = songList.findIndex(song => song.id === ids)

    //在歌单列表找不到该歌曲
    if(songFindIndex === -1) {
      getSongDetail(ids).then(res => {

        const song = res.songs && res.songs[0]
        if (!song) return
        const newSongList = [...songList];
        newSongList.push(song);


        dispatch(changeSongDetailAction(song))
        dispatch(changeSongListAction(newSongList))
        dispatch(changeCurrentSongIndexAction(newSongList.length - 1))

      })
    } else {
      dispatch(changeSongDetailAction(songList[songFindIndex]))
      dispatch(changeCurrentSongIndexAction(songFindIndex))
    }

    dispatch(getLyricAction(ids))


  }
}
