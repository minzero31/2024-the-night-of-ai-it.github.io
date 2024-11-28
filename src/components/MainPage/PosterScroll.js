import styled from "styled-components";

import PosterImg1 from "../../assets/mainpage/poster1.png";
import PosterImg2 from "../../assets/mainpage/poster2.png";
import PosterImg3 from "../../assets/mainpage/poster3.png";
import PosterImg4 from "../../assets/mainpage/poster4.png";
import PosterImg5 from "../../assets/mainpage/poster5.png";
import PosterImg6 from "../../assets/mainpage/poster6.png";
import PosterImg7 from "../../assets/mainpage/poster7.png";
import PosterImg8 from "../../assets/mainpage/poster8.png";

// Wrapper: 외부 컨테이너
const Wrapper = styled.div`
  display: flex;
  overflow: hidden; /* 스크롤 바 숨김 */
  width: 100%;
  padding: 20px 10px;
  position: relative;
`;

// ScrollingContainer: 애니메이션이 적용된 내부 박스
const ScrollingContainer = styled.div`
  display: flex;
  gap: 16px;
  animation: scroll 20s linear infinite; /* 20초 동안 스크롤 */
  width: calc(200px * 16); /* 이미지와 간격을 고려한 전체 길이 */

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%); /* 전체 길이만큼 왼쪽으로 이동 */
    }
  }
`;

// Img: 이미지 스타일
const Img = styled.img`
  width: 200px; /* 이미지 너비 고정 */
  height: auto;
  flex-shrink: 0; /* 크기 비율 유지 */
  border-radius: 8px; /* 모서리 둥글게 */
  transition: transform 0.3s ease; /* 확대 애니메이션 */

  &:hover {
    transform: scale(1.05); /* 호버 시 확대 */
  }
`;

function PosterScroll() {
  return (
    <Wrapper>
      <ScrollingContainer>
        {/* 이미지 2번 반복 렌더링 */}
        <Img src={PosterImg1} />
        <Img src={PosterImg2} />
        <Img src={PosterImg3} />
        <Img src={PosterImg4} />
        <Img src={PosterImg5} />
        <Img src={PosterImg6} />
        <Img src={PosterImg7} />
        <Img src={PosterImg8} />
        {/* 반복 이미지 */}
        <Img src={PosterImg1} />
        <Img src={PosterImg2} />
        <Img src={PosterImg3} />
        <Img src={PosterImg4} />
        <Img src={PosterImg5} />
        <Img src={PosterImg6} />
        <Img src={PosterImg7} />
        <Img src={PosterImg8} />
      </ScrollingContainer>
    </Wrapper>
  );
}

export default PosterScroll;
