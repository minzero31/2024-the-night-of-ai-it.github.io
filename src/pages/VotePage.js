import styled from "styled-components";
import React, { useState } from "react";
import NavBar from "../components/VotePage/NavBar";
import Dropdown from "../components/VotePage/Dropdown";
import Work from "../components/VotePage/Work";
import FloatingBtn from "../components/VotePage/FloatingBtn";

// images : 올해의 프로젝트
import projectImg1 from "../assets/vote/project-1.jpg";
import projectImg2 from "../assets/vote/project-2.jpg";
import projectImg3 from "../assets/vote/project-3.png";
import projectImg4 from "../assets/vote/project-4.png";

// images : 올해의 팀
import teamImg1 from "../assets/vote/team-1.jpg";
import teamImg2 from "../assets/vote/team-2.png";
import teamImg3 from "../assets/vote/team-3.png";

// images : 올해의 디버깅
import debuggingImg1 from "../assets/vote/debugging-1.png";

// images : 올해의 갓생러
import godImg1 from "../assets/vote/god-1.png";
import godImg2 from "../assets/vote/god-2.png";
import godImg3 from "../assets/vote/god-3.jpeg";

// images : 올해의 도파민중독자
import dopamineImg1 from "../assets/vote/dopamine-1.jpg";
import dopamineImg2 from "../assets/vote/dopamine-2.jpg";
import dopamineImg3 from "../assets/vote/dopamine-3.png";
import dopamineImg4 from "../assets/vote/dopamine-4.jpg";

// images : 올해의 쩝쩝박사
import foodImg1 from "../assets/vote/food-1.jpeg";
import foodImg2 from "../assets/vote/food-2.jpg";
import foodImg3 from "../assets/vote/food-3.jpeg";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-bottom: 40px;  // '투표하기' 버튼과 겹치지 않게 여백을 추가
`;

const DropdownContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
`;

const WorkContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
    margin-top: 12px;
`;

const Text = styled.div`
    color: #A7A7A7;
    font-size: 16px;
    margin-top: 20px;
    text-align: center;
`;

const BtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
`;

function VotePage() {
    const [selectedCategory, setSelectedCategory] = useState('올해의 프로젝트');

    const data = {
        '올해의 프로젝트': [
            { 
                image: projectImg1, 
                title: "🐾🐶WalkBuddy‼️", 
                name: "DOG", 
                content: "반려견과 견주, 비(非)견주 모두를 위한 스마트 리드줄 : WalkBuddy",
                notion: "https://www.notion.so/1455ca346f3b80fbaef5fe51e9aa945f?pvs=4"
            },
            { 
                image: projectImg2, 
                title: "라인송: 교내 줄 관리 시스템 및 로봇", 
                name: "라인송", 
                content: "교내 나눔 행사에서 줄 질서 및 관리 문제를 파악하여 대기, 운영하는 학우들에게 편리한 서비스를 제공하는 시스템 및 로봇",
                notion: "https://www.notion.so/LINESONG-a94782599d9a453d8c7618bddfd99cd7#96d5dd52a0e74756bee0ceac5226fcbb"
            },
            { 
                image: projectImg3, 
                title: "오늘은 우리 아이가 동화책 주인공", 
                name: "Victor", 
                content: "멀티모달모델을 활용한 맞춤형 동화책 생성 서비스 : 오늘은 우리 아이가 동화책 주인공, Team Victor, 2024 AI융합 문제발굴 산학연계 해커톤 수상작",
                notion: "https://dented-comfort-b38.notion.site/7607198fb6654270bcbfd6a8193425d8" 
            },
            { 
                image: projectImg4, 
                title: "아이티타임", 
                name: "아이티타임", 
                content: "인공지능공학부를 위한 학과 웹사이트",
                notion: "http://iron-philosophy-e71.notion.site"
            }
        ],
        '올해의 팀': [
            { 
                image: teamImg1, 
                title: "FIND_YOUR_MIND", 
                name: "Neural_Crew", 
                content: "딥러닝 기반 감정 인식을 활용한 공감형 아바타 기술로, 실시간 반응이 가능한 공감형 아바타 생성과 표현 기술을 개발하여 사회적, 관계적 고립 심화에 따른 사회문제를 해결함",
                notion: "https://www.notion.so/IVPL-fc2b391a3e3b488d8479a78fc162296e?p=93974e8af62d4465adbf1ea2a573258c&pm=s"
            },
            { 
                image: teamImg2, 
                title: "우리집 히어로즈", 
                name: "인트", 
                content: "벌레 퇴치를 위한 영웅 매칭을 도와주는 어플 : 우리집 히어로즈",
                notion: "https://mountainous-wolverine-fa2.notion.site/144bbd6c9abf80bf9fc7d91a412311df?pvs=4"
            },
            { 
                image: teamImg3, 
                title: "팀플 잘하는법", 
                name: "A.W.S", 
                content: "생성형 인공지능을 활용한 편의점 스마트 재고 관리 시스템",
                notion: "https://www.notion.so/148708307697802f9d3dc9e01845fc81?pvs=4"
            }
        ],
        '올해의 디버깅': [
            { 
                image: debuggingImg1, 
                title: "왜 넌(None)?", 
                name: "이예나", 
                content: "위치 추정 연구를 위한 노면 마찰력 등 다양한 요소를 반영한 모델 개발 중 최적화 파라미터 병합 오류와 센서 동기화 문제를 해결",
                notion: "https://yeinalee.notion.site/b61920a157a5438986ec124a83a5ac58"
            }
        ],
        '올해의 갓생러': [
            { 
                image: godImg1, 
                title: "빈틈없이 사는 삶", 
                name: "임소영", 
                content: "카카오스타일 인턴 - 독일 교환학생 - 해커톤 수상 - 취준의 삶을 사는 막학기",
                notion: "https://numerous-blob-adf.notion.site/1469fd364126803ba436d47d3e42bd19?pvs=4"
            },
            { 
                image: godImg2, 
                title: "24시간이 모자라", 
                name: "민젤오", 
                content: "24시간이 모자란 바쁘다 바빠 2학년 생활",
                notion: "https://silver-milk-150.notion.site/14850e545d7b8094883cdc8987bb7604"
            },
            { 
                image: godImg3, 
                title: "정량적 스펙 쌓기 챌린지", 
                name: "SAY-YO", 
                content: "2024년 한해 동안 인공지능공학과 빅데이터 분석학을 연계하여 학문적 성취를 이루기 위해 노력하고, 다양한 자격증을 취득하며 전문성을 쌓았습니다. 또한, 대외활동과 산학협력 프로젝트에서 실무 경험을 쌓고, 코코톤과 AWS Playground에서 최우수상을 수상하는 성과를 거두었습니다. 이를 통해 도전을 두려워하지 않고 성장하며, 같은 학교 학생들에게 다양한 경험을 통한 성장을 권장하고자 합니다!",
                notion: "https://www.notion.so/14866c2ded5080b08a0cf592839e147b?pvs=4"
            }
        ],
        '올해의 도파민 중독자': [
            { 
                image: dopamineImg1, 
                title: "SM과 INB100은 페이백 부탁드립니다.", 
                name: "오보리", 
                content: "사이버 덕질 10년차의 2024년 오프라인 행사 참여 기행",
                notion: "https://purring-algebra-7b3.notion.site/1405b5c2003f8097a4efd87049749211?pvs=4"
            },
            { 
                image: dopamineImg2, 
                title: "누나 혹시 스키즈예요?", 
                name: "저능즈", 
                content: "내가 숙대생이야 스테이야? 숙대생...? 스테이잖아! 너가 날 스테이로 대하고 있잖아!",
                notion: "https://www.notion.so/145ed14a05eb8067a756e5b786e43389?pvs=4"
            },
            { 
                image: dopamineImg3, 
                title: "누나 야구선수에요?", 
                name: "곰은 야구를 찢어!", 
                content: "제목은 누나 야구 선수에요? 라고 하겠습니다. 근데 NCT127을 아주 조금 곁들인.",
                notion: "https://scrawny-dragon-6dd.notion.site/147926080a6780e79f6fd42a32abd1fd?v=147926080a6781838462000c77ad3e87"
            },
            { 
                image: dopamineImg4, 
                title: "나락이다(I'M ROCK)", 
                name: "?", 
                content: "2024년에 즐긴 다양한 각종 공연: 페스티벌, 밴드공연, 뮤지컬, 무대인사 등",
                notion: "https://www.notion.so/143a2900b8f280a19da2de244ad9b67b?pvs=4"
            }
        ],
        '올해의 쩝쩝박사': [
            { 
                image: foodImg1, 
                title: "정문으로 들어오세여", 
                name: "쑤우", 
                content: "용산구 숙대입구에 위치한 요리주점입니다. 다양한 요리와 주류가 준비되어 있습니다.",
                notion: "https://www.notion.so/1473cb6e6e0980e69003fc91aa973296?pvs=4"
            },
            { 
                image: foodImg2, 
                title: "한남동 감자탕 본점(24시뼈다귀감자탕)", 
                name: "흑백미식가", 
                content: "최현석 셰프님의 최애 단골 식당으로 알려진 이 식당은 감자탕도 맛있지만 뼈 찜이 진짜다!",
                notion: "https://airy-prince-37f.notion.site/1485a3ec65058186a670d1e63256de4f?pvs=4"
            },
            { 
                image: foodImg3, 
                title: "돈까스조아하세욥?", 
                name: "합격입니다", 
                content: "학교 앞 돈까스 도장깨기(포돈, 사랑과 사랑, 미스터카츠••) 그외 추천 맛집까지!",
                notion: "https://www.notion.so/1fa5aec2791d4a32a380bafa162a0e38?pvs=4"
            }
        ]
    };
    
    return (
        <Wrapper>
            <NavBar />
            <DropdownContainer>
                <Dropdown
                    selectedCategory={selectedCategory}
                    onCategorySelect={setSelectedCategory}
                />
            </DropdownContainer>
            <WorkContainer>
                {/* 선택된 카테고리의 데이터만 렌더링 */}
                {data[selectedCategory]?.map((work, index) => (
                    <Work 
                        key={index}
                        image={work.image}
                        title={work.title}
                        name={work.name}
                        content={work.content}
                        notion={work.notion}
                    />
                ))}
            </WorkContainer>
            <Text>*이미지 클릭시 크게 보기가 가능합니다!</Text>
            <BtnContainer>
                <FloatingBtn />
            </BtnContainer>
        </Wrapper>
    );
}

export default VotePage;
