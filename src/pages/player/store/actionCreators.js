import {
  CHANGE_CURRENT_SONG,
  CHANGE_LOOP_TYPE,
  CHANGE_SONG_LIST,
  CHANGE_CURRENT_SONG_INDEX
} from "./constants";

import {getSongDetail} from "services/player";

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



export const changeLoopTyeAction = loopType => ({
  type: CHANGE_LOOP_TYPE,
  loopType
})


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
        console.log(newSongList,'新歌单数组');



        dispatch(changeSongDetailAction(song))
        dispatch(changeSongListAction(newSongList))
        dispatch(changeCurrentSongIndexAction(newSongList.length - 1))

      })
    } else {
      dispatch(changeSongDetailAction(songList[songFindIndex]))
      dispatch(changeCurrentSongIndexAction(songFindIndex))
    }


  }
}
