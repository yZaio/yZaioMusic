import styled from "styled-components";

export const AppPlayerFooterWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 53px;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    display: flex;
    align-items: center;
    height: 47px;
    margin-top: 6px;

    .playControl {
      height: 47px;
      display: flex;
      align-items: center;

      .prev {
        display: inline-block;
        width: 28px;
        height: 28px;
        cursor: pointer;
        background-position: 0 -130px;
      }

      .play {
        display: inline-block;
        width: 36px;
        height: 36px;
        margin: 0 8px;
        cursor: pointer;
        background-position: 0 ${props => props.isPlaying ? "-165px": "-204px"};
      }

      .next {
        display: inline-block;
        width: 28px;
        height: 28px;
        cursor: pointer;
        background-position: -80px -130px;
      }
    }


    .playInfo {
      display: flex;
      margin-left: 15px;

      img {
        cursor: pointer;
      }

      .detailInfo {
        margin-left: 15px;

        .songDetail {

          span {
            cursor: pointer;

            :hover {
              text-decoration: underline;
            }

            :nth-child(1) {
              color: #e8e8e8;
            }
            :nth-child(2) {
              color: #9b9b9b;
              margin-left: 15px;
            }
          }
        }

        .process {
          display: flex;
          align-items: center;

          .ant-slider {
            width: 493px;
            margin: 0 15px 0 0;
          }

          .ant-slider-rail {
            height: 9px;
            background: url(${require("@/assets/img/progress_bar.png").default}) right 0;
          }

          .ant-slider-track {
            height: 9px;
            background: url(${require("@/assets/img/progress_bar.png").default}) left -66px;
          }

          .ant-slider-handle {
            width: 22px;
            height: 24px;
            border: none;
            margin-top: -7px;
            background: url(${require("@/assets/img/sprite_icon.png").default}) 0 -250px;
          }

          .processTime {
            span {
              color: #797979;

              :nth-child(1) {
                color: #a1a1a1;
              }
            }
          }
        }
      }

    }


    .playOperation {
      display: flex;
      position: relative;
      top: 5px;
      margin-left: 20px;

      .btn {
        width: 25px;
        height: 25px;
        cursor: pointer;
      }

      .left {
        .favor {
          background-position: -88px -163px;
        }

        .share {
          background-position: -114px -163px;
        }
      }

      .right {
        width: 126px;
        padding-left: 13px;
        background-position: -147px -248px;

        .volume {
          background-position: -2px -248px;
        }

        .loop {
          background-position: ${props => {
            switch(props.loopType) {
              case 1:
                return "-66px -248px"
              case 2:
                return "-66px -344px"
              default:
                return "-3px -344px"
            }
          }};
        }

        .playlist {
          width: 59px;
          background-position: -42px -68px;
        }
      }
    }
  }
`


