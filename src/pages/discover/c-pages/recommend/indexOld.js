import React, {memo, useEffect} from 'react'

import { connect } from "react-redux";
import {getTopBannersAction} from "./store/actionCreators";

const ZYRecommend =  memo(function(props) {
  const { getTopBanners , topBanners } = props

  useEffect(() => {
    getTopBanners()
  },[getTopBanners])

  return (
    <div>
      <h2>ZYRecommend: {topBanners.length}</h2>
    </div>
  )
})

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
})

const mapDispatchToProps = dispatch => ({
  getTopBanners: () => {
    dispatch(getTopBannersAction())
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(ZYRecommend)
