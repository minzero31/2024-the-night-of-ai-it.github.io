import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
import logoBlueImg from "../assets/logo/logo_blue.png";

const Logo = styled.img`
  width: 240px;
  margin-top: 0;
  margin-bottom: 100px;
  margin-left : 23%;
  cursor: pointer;
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 50px;
  margin: 10px;
`;

const EventImage = styled.div`
  flex: 1.5;
  height: 90%;
  background-image: url("/image/applypic.jpg"); /* 이미지 경로 */
  background-size: cover;
  background-position: left center; /* 이미지를 왼쪽 끝으로 이동 */
  mask-image: linear-gradient(to right, black 0%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, black 20%, transparent 100%);
  margin : 20px;
    border: 5px solid #74ecff; /* 테두리 색상과 두께 */
  border-radius: 00px; /* 둥근 테두리 (필요 없으면 제거 가능) */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* 선택 사항: 그림자 추가 */
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  color: #fff; /* 글씨 색상 */
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #ffffff;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.0rem;
  line-height: 1.5;
  color: #b3b3b3;
  margin-bottom: 40px;
`;

const ApplyButton = styled.button`
  font-size: 1.1rem;
  font-weight: bold;
  border: 1px solid #74ecff;
  color: #121212;
  background-color: #74ecff;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  align-self: start;
  transition: background-color 0.3s;

  &:hover {
    border: 1px solid #74ecff;
    color: #74ecff;
    background-color: #121212;
  }
`;

function Apply() {
    const handleApplyClick = () => {
        window.open("https://forms.gle/s737fLufC5UQNaYg8", "_blank");
    };

    const navigate = useNavigate();

    return (
        <>
          <GlobalStyle />
        
          <Container>
            <EventImage />
            
            <Content>
            <Logo
                src={logoBlueImg}
                onClick={() => {navigate("/");}}
            />
            <Title> AI & IT인의 밤</Title>
            <Description>
              &nbsp;AI&IT인의 밤(The Night of AI+IT)은 인공지능공학부에서 한 해를 마무리하며 진행하는 인공지능공학부(IT공학전공) 학부의 가장 큰 행사입니다.<br/><br/>
              &nbsp;졸업한 선배님들과의 교류, 다양한 경품 추첨, 학과 학회 활동 보고, 레크레이션 등 다양하고 알찬 행사 구성으로, 2024년도의 유종의 미를 거두고자 하는 포부를 담았습니다.<br/><br/>
              &nbsp;특히, 2024 The Night of AI+IT는 1년동안 열심히 달려온 인공지능공학부 학우 여러분들의 작품을 6부문으로 나눠 우수 작품에 대한 시상식이 진행됩니다.<br/><br/>
              &nbsp;올해만의 행사와 구성으로 즐길 수 있는 2024 AI&IT인의 밤에 많은 신청과 관심 부탁드립니다.
            </Description>
            <ApplyButton onClick={handleApplyClick}>행사 신청</ApplyButton>
            </Content>
          </Container>
        </>
    );
}

export default Apply;
