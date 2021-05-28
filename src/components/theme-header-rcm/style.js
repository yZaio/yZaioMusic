import styled from "styled-components";

export const ThemeHeaderRcm = styled.div`
  width: 100%;
  height: 33px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #C10D0C;


  .left {
    display: flex;
    align-items: center;

    i {
      width: 33px;
      height: 33px;
      background-position: -225px -156px;
    }

     .title {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-top: -5px;
      cursor: pointer;
    }

    .listContain {
      margin-left: 20px;
    }

    .listItem {
      color: #666;
      span:nth-child(1) {
        cursor: pointer;
        :hover {
          text-decoration: underline;
        }
      }
      span:nth-child(2) {
        margin: 0 10px;
      }
    }
  }


  .right {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #666;

    :hover {
      text-decoration: underline;
    }
    i {
      display: block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`
