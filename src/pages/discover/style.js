import styled from "styled-components";

export const Discover = styled.div`
  .top {
    height: 30px;
    background-color: #C20C0C;
  }

  .menu {
    display: flex;
    padding-left: 180px;
    box-sizing: border-box;

    .item {
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 13px;
        margin: 3px 17px 0;
        color: #fff;
        text-decoration: none;

        &.active {
          background-color: #9B0909;
          border-radius: 20px;
        }
      }

    }
  }
`
