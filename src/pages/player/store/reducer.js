import { Map } from "immutable";

import {
  CHANGE_CURRENT_SONG,
  CHANGE_LOOP_TYPE
} from "./constants";

const defaultState = Map({
  currentSong: {},
  loopType: 0
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_SONG:
      return state.set('currentSong',action.currentSong)
    case CHANGE_LOOP_TYPE:
      return state.set('loopType',action.loopType)
    default:
      return state
  }
}

export default reducer
