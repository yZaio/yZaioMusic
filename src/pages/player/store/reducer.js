import { Map } from "immutable";

import {
  CHANGE_CURRENT_SONG,
  CHANGE_LOOP_TYPE,
  CHANGE_SONG_LIST,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_LYRIC_LIST,
  CHANGE_CURRENT_LYRIC_INDEX
} from "./constants";

const defaultState = Map({
  currentSong: {},
  loopType: 0, //歌曲播放的形式  0：顺序 1：随机 2：单曲
  songList: [],
  currentSongIndex: 0,
  lyricList: [],
  currentLyricIndex: 0
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_SONG:
      return state.set('currentSong',action.currentSong)
    case CHANGE_LOOP_TYPE:
      return state.set('loopType',action.loopType)
    case CHANGE_SONG_LIST:
      return state.set('songList',action.songList)
    case CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex',action.currentSongIndex)
    case CHANGE_LYRIC_LIST:
      return state.set('lyricList',action.lyricList)
    case CHANGE_CURRENT_LYRIC_INDEX:
      return state.set('currentLyricIndex',action.currentLyricIndex)
    default:
      return state
  }
}

export default reducer
