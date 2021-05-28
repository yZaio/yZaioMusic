import { Map } from "immutable";

import {
  CHANGE_CURRENT_SONG,
  CHANGE_LOOP_TYPE,
  CHANGE_SONG_LIST,
  CHANGE_CURRENT_SONG_INDEX
} from "./constants";

const defaultState = Map({
  currentSong: {},
  loopType: 0,
  songList: [],
  currentSongIndex: 0
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
    default:
      return state
  }
}

export default reducer
