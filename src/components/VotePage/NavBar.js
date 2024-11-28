import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import greenLogo from "../../assets/logo/logo_green.png";
import ApplyImg1 from "../../assets/button/apply_white.png";
import ApplyImg2 from "../../assets/button/apply_green.png";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    gap: 500px;
`;

const LogoImg = styled.img`
    width: 160px;
    cursor: pointer;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    flex-wrap: nowrap;
`;

// const Button = styled.button`
//     border: none;
//     font-size: 20px;
//     font-weight: bold;
//     background: none;
//     color: #FFFFFF;
//     cursor: pointer;
//     transition: text-shadow 0.3s;
//     &:hover {
//         text-shadow: 2px 2px 5px #B3F624;
//     }
// `;

const ApplyBtn = styled.div`
    cursor: pointer;
    width: 120px;
    aspect-ratio: 3.4 / 1;
    background-image: url(${ApplyImg1});
    background-size: cover;
    background-position: center;
    transition: background-image 0.3s ease-in-out;

    &:hover {
        background-image: url(${ApplyImg2});
    }
`;

function NavBar() {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <LogoImg 
                src={greenLogo}
                onClick={() => {navigate("/");}}
            />
            <ButtonWrapper>
                {/* <Button onClick={() => {navigate("/vote");}}>투표</Button> */}
                {/* <Button onClick={() => {navigate("/apply");}}>행사 신청</Button> */}
                <ApplyBtn
                    onClick={() => {
                        navigate("/apply");
                    }}
                />
            </ButtonWrapper>
        </Wrapper>
    );
}

export default NavBar;