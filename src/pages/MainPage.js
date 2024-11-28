import styled from 'styled-components';
import React, { useState, useEffect, useRef } from "react";
import PosterScroll from '../components/MainPage/PosterScroll.js';
import VideoWithScrollingText from "../components/MainPage/VideoWithScrollingText";

import LogoImg1 from "../assets/mainpage/logo1.png";
import PosterImg from "../assets/mainpage/ai_it_poster.png";
import TimetableImg from "../assets/mainpage/timetable.png";
import RecordImg from "../assets/mainpage/record.png";

import MapImg from "../assets/mainpage/map.png";
import MapHead from "../assets/mainpage/maphead.png";
import MapText from "../assets/mainpage/maptext.png";

import InstagramIcon from "../assets/mainpage/instagram.png";
import YoutubeIcon from "../assets/mainpage/youtube.png";
import KakaotalkIcon from "../assets/mainpage/kakaotalk.png";

import Header from '../components/MainPage/Header.js';

const OuterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: nowrap;
`;

const Logo = styled.img`
    width: 800px;
    margin-bottom: 40px;
`;

const Info = styled.div`
    text-align: left;
    margin-bottom: 60px;
`;

const Text = styled.p`
    color: #D7F885;
    font-size: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    flex-wrap: nowrap;
    margin: 70px 0;
`;

const Poster = styled.img`
    width: 300px;
`;

const TimeTable = styled.img`
    width: 400px;
`;

const RecordContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: nowrap;
    margin-bottom: 40px;
`;

const Bar = styled.hr`
    width: 280px;
    height: 2px;
    border-image: ${({ gradient }) => gradient} 1;
`;

const Title = styled.img`
    width: 200px;
`;

const PosterScrollContainer = styled.div`
    width: 780px;
    margin-bottom: 40px;
`;

const VideoContainer = styled.div`
    //Destination Anchor
`;

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const Right = styled.p`
    color: #777777;
    font-size: 14px;
    margin: 2px 1px;
`;

const SNSContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: nowrap;
    margin-bottom: 60px;
    position: relative;
`;

const SNSIcon = styled.img`
    width: 28px;
    cursor: pointer;
`;

const DirectionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 60px;
    width: 100%;
    max-width: 800px;
`;

const MapHeadImage = styled.img`
    width: 140px;
    margin-bottom: 10px;
`;

const MapImagesContainer = styled.div`
    display: flex;
    gap: 100px; 
    align-items: center;
    width: 100%;
`;

const MapImage = styled.img`
    width: 350px;
    border-radius: 20px; 
    box-shadow: 0px 20px 30px -5px rgba(255, 255, 255, 0.5); 
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transform: translateY(${({ isVisible }) => (isVisible ? "0" : "20px")});
    transition: all 0.5s ease-in;
    cursor: pointer;
    
    &:hover {
        box-shadow: 0px 20px 30px -5px rgba(179, 246, 36, 0.5); // #B3F624 (연두색)의 rgba 값
    }
`;

const MapTextImage = styled.img`
    width: 300px;
    border-radius: 20px; 
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transform: translateY(${({ isVisible }) => (isVisible ? "0" : "20px")});
    transition: opacity 1s ease-in, transform 1s ease-in;
`;

const LocationText = styled(Text)`
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        color: white;
        transform: scale(1.05);
    }
`;

function MainPage() {
    const [isMapVisible, setMapVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setMapVisible(false); 
            setTimeout(() => setMapVisible(true), 100); 
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const recordRef = useRef(null);
    const videoRef = useRef(null);
    const timetableRef = useRef(null);
    const wayRef = useRef(null);

    const scrollToSection = (section) => {
        switch (section) {
            case "record":
                recordRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "video":
                videoRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "timetable":
                timetableRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "way":
                wayRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            default:
                break;
        }
    };

    return (
        <OuterContainer>
            <Header scrollToSection={scrollToSection} />
            <LogoContainer>
                <Logo src={LogoImg1} />
            </LogoContainer>
            
            <Info>
                <Text>일시 | 2024. 12. 16. Mon. 17:00</Text>
                <LocationText onClick={() => window.open("https://naver.me/5YFLFs9V", "_blank")}>
                    장소 | 삼정 호텔 아도니스홀 ↗
                </LocationText>
            </Info>

            {/* Destination Anchor : 행사기록 */}
            <RecordContainer ref={recordRef}>
                <Bar gradient="linear-gradient(to right, #B3F624, #F1F1F1)" />
                <Title src={RecordImg} />
                <Bar gradient="linear-gradient(to left, #B3F624, #F1F1F1)" />
            </RecordContainer>

            <PosterScrollContainer>
                <PosterScroll />
            </PosterScrollContainer>

            {/* Destination Anchor : 홍보영상 */}
            <VideoContainer ref={videoRef}/>
            <VideoWithScrollingText />

            {/* Destination Anchor : 타임테이블 */}
            <Wrapper>
                <Poster src={PosterImg}></Poster>
                <TimeTable src={TimetableImg} ref={timetableRef}></TimeTable>
            </Wrapper>

            {/* Destination Anchor : 오시는 길 */}
            <DirectionsContainer ref={wayRef}>
                <MapHeadImage src={MapHead} alt="오시는 길" />
                <MapImagesContainer>
                    <MapImage
                        id="map"
                        src={MapImg}
                        isVisible={isMapVisible}
                        alt="Event Location Map"
                        onClick={() => window.open("https://kko.kakao.com/HNoCvBvH5G", "_blank")}
                    />
                    <MapTextImage
                        src={MapText}
                        isVisible={isMapVisible}
                        alt="Event Location Map"
                    />
                </MapImagesContainer>
            </DirectionsContainer>

            <Footer>
                <Right>인공지능공학부 제 2대 학생회 pAInt IT</Right>
                <Right>Copyright ⓒpAIntIT All rights reserved.</Right>
            </Footer>

            <SNSContainer>
                <SNSIcon src={InstagramIcon} onClick={() => window.open("https://www.instagram.com/smwu_ai/", "_blank")} />
                <SNSIcon src={YoutubeIcon} onClick={() => window.open("https://www.youtube.com/@smwu_ai", "_blank")} />
                <SNSIcon src={KakaotalkIcon} onClick={() => window.open("https://pf.kakao.com/_KRPiG", "_blank")} />
            </SNSContainer>
        </OuterContainer>
    );
}

export default MainPage;
