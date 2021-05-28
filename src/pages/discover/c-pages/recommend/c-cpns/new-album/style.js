import styled from "styled-components";

export const NewAlumWrapper = styled.div`

`

export const NewAlumContent = styled.div`
  width: 100%;
  height: 188px;
  box-sizing: border-box;
  background: #f5f5f5;
  border: 1px solid #d3d3d3;
  margin: 20px 0 37px 0;
  display: flex;
  align-items: center;

    .arrow {
      display: inline-block;
      width: 25px;
      height: 25px;
      cursor: pointer;
      text-align: center;
    }

    .arrow-left {
      background-position: -260px -75px;
    }

    .arrow-right {
      background-position: -300px -75px;
    }

  .alumContain {
    width: 645px;
    height: 150px;

    .pageContain {
      width: 645px;
      height: 150px;
      display: flex!important;
      overflow: hidden;
      margin-top: 10px;
      justify-content: space-between;
    }


    //.album {
    //  position: relative;
    //  width: 118px;
    //  height: 100px;
    //  flex-shrink: 0;
    //  margin-left: 11px;
    //
    //  a {
    //    display: inline-block;
    //    width: 100%;
    //    height: 100%;
    //    position: absolute;
    //    top: 0;
    //    left: 0;
    //    text-indent: -99999px;
    //    background-position: 0 -570px;
    //  }
    //
    //  .album-name {
    //    color: #000;
    //    cursor: pointer;
    //    margin-top: 5px;
    //
    //    :hover {
    //      text-decoration: underline;
    //    }
    //  }
    //
    //  .album-artist {
    //    color: #666;
    //  }
    //}


  }
`
