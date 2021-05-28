import styled from "styled-components";

export const SongsCoverWrapper = styled.div`
  padding: ${props => props.index % 4 === 0 ? 0 : '0 0 50px 30px'};
  box-sizing: border-box;

  .cover-top {
    position: relative;
    width: 140px;
    height: 140px;
    background-image: url(${props => props.topImg});
    background-size: 140px;


    .bottomContain {
      position: absolute;
      display: flex;
      width: 140px;
      height: 27px;
      background-position: 0 -537px;
      bottom: 0;
      align-items: center;
      color: #ccc;

      i:nth-child(1) {
        margin: 0 10px;
        display: inline-block;
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
      }
      i:nth-child(3) {
        position: absolute;
        display: inline-block;
        width: 16px;
        height: 17px;
        background-position: 0 0;
        right: 10px;
      }
    }

  }

  .cover-title {
    width: 140px;
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }

  .cover-source {
    width: 140px;
    color: #666;
  }
`
