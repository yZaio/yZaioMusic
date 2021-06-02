import styled from "styled-components";

export const Recommend = styled.div`
  .cente-content {
    position: relative;
  }

  .heart {   position: absolute;   top: 200px;   left: 200px;   width: 100px;   height: 100px;   /* position: relative; */   background-color: #f00;   transform: rotate(45deg);   /* transform: translate(-50%,-50%); */   margin: -50px 0 0 -50px;   animation: jump 1s infinite alternate;   z-index: 101; } @keyframes jump         {             0%   {width: 120px;height: 120px;margin: -60px 0 0 -60px;}             25%  {width: 140px;height: 140px;margin: -70px 0 0 -70px;}             50%  {width: 160px;height: 160px;margin: -80px 0 0 -80px;}             100% {width: 180px;height: 180px;margin: -90px 0 0 -90px;}         } .heart::before, .heart::after {   position: absolute;   content: '';   background-color: #f00;   top: 0px;   left: -50%;   width: 100%;   height: 100%;   border-radius: 50%; } .heart::after {   left: 0;   top: -50%; }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #999;
`

export const ContentLeft = styled.div`
  width: 730px;
  box-sizing: border-box;
  padding: 20px 20px 40px;
  border-right: 1px solid #999;
  background-color: #fff;
`

export const ContentRight = styled.div`
  flex: 1;
  background-color: #ffffff;
`



