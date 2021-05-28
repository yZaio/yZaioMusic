import styled from "styled-components";

export const AppHeader = styled.div`
  height: 75px;
  font-size: 14px;
  color: #ffffff;
  background-color: #242424;
  border-bottom: 5px solid #C00014;
  box-sizing: border-box;

  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
    //background-color: #61dafb;

    .left {
      display: flex;

      .logo {
        display: block;
        width: 176px;
        height: 69px;
        background-position: 0 0;
        text-indent: -9999px;
      }

      .selectItem {
        position:relative;
        line-height: 70px;
        cursor: pointer;
        color: #eee;


        a {
          display: block;
          height: 70px;
          color: #aaa;
          padding: 0 20px;

          &.active {
            color: #fff;
            background: #000;
            text-decoration: none;

             .icon {
              position: absolute;
              display: inline-block;
              width: 12px;
              height: 7px;
              bottom: -1px;
              left: 50%;
              transform: translate(-50%, 0);
              background-position: -226px 0;

            }
          }
        }
        :last-of-type a {
          position: relative;
          ::after {
            position: absolute;
            content: "";
            width: 28px;
            height: 19px;
            background-image: url(${require("@/assets/img/sprite_01.png").default});
            background-position: -190px 0;
            top: 20px;
            right: -15px;
          }
        }

        :hover {
          background-color: #000;
          a {
            text-decoration: none;
            color: #ffffff;
          }
        }

      }

    }

    .right {
      display: flex;
      align-items: center;

      .search {
        width: 158px;
        height: 32px;
        border-radius: 32px;

        input {
          &::placeholder {
            font-size: 12px;
          }
        }
      }

      .creator {
        width: 90px;
        height: 32px;
        margin: 0 12px;
        box-sizing: border-box;
        padding-left: 16px;
        border: 1px solid #4F4F4F;
        background-position: 0 -140px;
        line-height: 33px;
        color: #ccc;
        font-size: 12px;
        border-radius: 20px;
        cursor: pointer;

        :hover {
          border: 1px solid #fff;
          color: #fff;
        }
      }

      .login {
        color: #aaa;
        font-size: 12px;
        cursor: pointer;

        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`
