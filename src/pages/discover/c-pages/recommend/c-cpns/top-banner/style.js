import styled from "styled-components";

export const TopBanner = styled.div`
  height: 285px;
  background: url(${props => props.bgImg}) center center/6000px;;

  .content {
    height: 100%;
    display: flex;
    position: relative;

    .left {
      width: 730px;
      height: 100%;

      .banner-item {
        width: 100%;
        height: 285px;

        img {
          width: 100%;
          height: 285px;
          overflow: hidden;
        }
      }
    }

    .right {
      flex: 1;
      background: url(${require("@/assets/img/download.png").default});
    }

    .bannerControl {
      .btn {
        position: absolute;
        width: 37px;
        height: 63px;
        background-image: url(${require("@/assets/img/banner_sprite.png").default});
        background-color: transparent;
        cursor: pointer;
        top: 50%;
        transform: translateY(-50%);

        :hover {
          background-color: rgba(0, 0, 0, .1);
        }
      }

      .left {
        left: -68px;
        background-position: 0 -360px;
      }

      .right {
        right: -68px;
        background-position: 0 -508px;
      }
    }
  }
`
