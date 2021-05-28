import {
  CHANGE_CURRENT_SONG,
  CHANGE_LOOP_TYPE
} from "./constants";

import {getSongDetail} from "services/player";


const changeSongDetailAction = res => ({
  type: CHANGE_CURRENT_SONG,
  currentSong: res.songs[0]
})

export const changeLoopTyeAction = loopType => ({
  type: CHANGE_LOOP_TYPE,
  loopType
})


export const getSongDetailAction = ids => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      dispatch(changeSongDetailAction(res))
    })
  }
}
