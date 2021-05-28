import styled from "styled-components";

export const AlbumCoverWrapper = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.size};
  flex-shrink: 0;
  //margin-left: 11px;

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    text-indent: -99999px;
    background-position: 0 ${props => props.bgp};
  }

  .album-name {
    color: #000;
    cursor: pointer;
    margin-top: 5px;
    font-size: 12px;

      :hover {
        text-decoration: underline;
      }
   }

   .album-artist {
     color: #666;
     font-size: 12px;
   }
`
