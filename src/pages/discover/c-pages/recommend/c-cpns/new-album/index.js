import React, {memo, useEffect, useRef} from 'react'

import { Carousel } from 'antd';

import ZYThemeHeaderRcm from "components/theme-header-rcm";
import ZYAlbumCover from "components/album-cover";
import {
  NewAlumWrapper,
  NewAlumContent
} from "./style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getNewAlbumsAction} from "../../store/actionCreators";

const ZYNewAlbum =  memo(function(props) {

  //redux hooks
  const dispatch = useDispatch()
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(['recommend','newAlbums'])
  }),shallowEqual)

  //react hooks
  useEffect(() => {
    dispatch(getNewAlbumsAction(10))
  },[dispatch])

  const pageRef = useRef()

  return (
    <NewAlumWrapper>
      <ZYThemeHeaderRcm title='新碟上架'></ZYThemeHeaderRcm>
      <NewAlumContent>
        <i className='arrow arrow-left sprite_02' onClick={e => pageRef.current.prev()}></i>
        <div className='alumContain'>
          <Carousel dots={false} ref={pageRef}>
            {
              [0,1].map(item => {
                return (
                  <div className='pageContain' key={item}>
                    {
                      newAlbums.slice(item * 5,(item + 1) * 5).map((iten,index) => {
                        return (
                          <ZYAlbumCover
                            key={iten.id}
                            info={iten}
                            size={100}
                            width={118}
                            bgp={-570}
                          ></ZYAlbumCover>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>

        <i className='arrow arrow-right sprite_02' onClick={e => pageRef.current.next()}></i>
      </NewAlumContent>
    </NewAlumWrapper>
  )
})
export default ZYNewAlbum
