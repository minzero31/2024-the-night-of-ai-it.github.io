import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
    gap: 100px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: nowrap;
`;

const Button = styled.button`
    border: none;
    font-size: 18px;
    font-weight: bold;
    background: none;
    color: #FFFFFF;
    cursor: pointer;
    transition: text-shadow 0.3s;
    &:hover {
        text-shadow: 2px 2px 5px #B3F624;
    }
`;

function Header({ scrollToSection }) {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <ButtonWrapper>
                <Button onClick={() => scrollToSection("record")}>행사기록</Button>
                <Button onClick={() => scrollToSection("video")}>홍보영상</Button>
                <Button onClick={() => scrollToSection("timetable")}>타임테이블</Button>
                <Button onClick={() => scrollToSection("way")}>오시는 길</Button>
                <Button onClick={() => {navigate("/vote");}}>투표</Button>
                <Button onClick={() => {navigate("/apply");}}>행사신청</Button>
            </ButtonWrapper>
        </Wrapper>
    );
}

export default Header;