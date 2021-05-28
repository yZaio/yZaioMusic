import styled from "styled-components";

export const RankingItemWrapper = styled.div`
  flex: 1;
  height: 472px;
`

export const RankingItemTop = styled.div`
  height: 100px;
  display: flex;
  margin: 20px 0 0 20px;

  .img-contain {
    position: relative;
    img {
      width: 80px;
      height: 80px;
    }

    a {
      display: inline-block;
      width: 80px;
      height: 80px;
      background-position: -145px -57px;
      text-indent: -99999px;
    }
  }



  .top-content {
    margin-left: 10px;

    .rankingName {
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;

      :hover {
        text-decoration: underline;
      }
    }

    i {
       display: inline-block;
       text-indent: -9999px;
       width: 22px;
       height: 22px;
       margin: 8px 10px 0 0;
       cursor: pointer;

       &.play {
        background-position: -267px -205px;
       }

       &.collect {
        background-position: -300px -205px;
       }
    }
  }


`

export const RankingItemContent = styled.div`
  width: 100%;

  .list-item {
    box-sizing: border-box;
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;

    :hover {
      .iconContain {
        display: block!important;
      }
    }

    .item-index {
      width: 35px;
      text-align: center;
      color: #c10d0c;
      font-size: 16px;
      margin-left: 10px;
    }

    .item-content {
      width: 170px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      div:nth-child(1) {
        flex: 1;

      }

      .iconContain {
      display: none;
      align-items: center;
      width: 82px;
      box-sizing: border-box;
      margin-top: 5px;


      i {
        display: inline-block;
        width: 17px;
        height: 17px;
        margin-left: 8px;

        cursor: pointer;


        &.play {
          background-position: -267px -268px;
        }

        &.addTo {
          position: relative;
          top: 2px;
          background-position: 0 -700px;
        }
        &.collect {
          background-position: -297px -268px;
        }
      }
    }
    }


  }
`

export const RankingItemFooter = styled.div`
  height: 32px;
  width: 100%;
  padding-right: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
