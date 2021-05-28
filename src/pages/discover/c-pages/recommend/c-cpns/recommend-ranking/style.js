import styled from "styled-components";

export const RecommendRankingWrapper = styled.div`

`
export const RecommendRankingContent = styled.div`
  height: 472px;
  margin: 30px 0;
  background-color: #61dafb;
  background-image: url(${require("@/assets/img/recommend-top-bg.png").default});
  display: flex;

  .rankingItem {
    flex: 1;
  }
`

