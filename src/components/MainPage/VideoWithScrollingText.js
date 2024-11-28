import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  background-color: black;
`;

const ScrollingBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 64px;
  font-weight: bold;
  background: linear-gradient(to right, #B3F624, #F1F1F1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: scrollText 40s linear infinite;

  @keyframes scrollText {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const Line = styled.div`
  position: absolute;
  top: 48%;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #B3F624, #F1F1F1);
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: -150px;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to top, rgba(179, 246, 36, 0.2), transparent);
    z-index: -1;
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  max-width: 600px;
  height: auto;
  z-index: 1;
  aspect-ratio: 16/9;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
`;

function VideoWithScrollingText() {
  return (
    <Wrapper>
      <Line />
      <ScrollingBackground>
        THE NIGHT OF AI + IT &nbsp;&nbsp;&nbsp;&nbsp; THE NIGHT OF AI + IT &nbsp;&nbsp;&nbsp;&nbsp;
        THE NIGHT OF AI + IT &nbsp;&nbsp;&nbsp;&nbsp; THE NIGHT OF AI + IT &nbsp;&nbsp;&nbsp;&nbsp;
        THE NIGHT OF AI + IT &nbsp;&nbsp;&nbsp;&nbsp; THE NIGHT OF AI + IT &nbsp;&nbsp;&nbsp;&nbsp;
      </ScrollingBackground>
      <VideoContainer>
        <StyledIframe
          src="https://www.youtube.com/embed/ARCxwTnqp3Y"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoContainer>
    </Wrapper>
  );
}

export default VideoWithScrollingText;