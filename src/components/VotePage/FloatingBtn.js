import styled from "styled-components";
import BtnImg from "../../assets/btn_box.png";

const Wrapper = styled.div`
    position: absolute;
    bottom: 20px;
    right: 0px;
    z-index: 1000;
`;

// const Button = styled.button`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border: none;
//     width: 60px;
//     height: 60px;
//     border-radius: 50%;
//     font-size: 16px;
//     font-weight: bold;
//     color: #121212;
//     background-color: #B3F624;
//     cursor: pointer;
//     padding: 10px;
//     transition: background-color 0.5s;
//     &:hover{
//         border: 1px solid #B3F624;
//         color: #B3F624;
//         background-color: #121212;
//     }
// `;

const VoteBtn = styled.div`
    cursor: pointer;
    width: 120px;
    aspect-ratio: 2 / 1;
    background-image: url(${BtnImg});
    background-size: cover;
    background-position: center;
    transition: filter 0.5s ease-in-out;

    &:hover {
        filter: brightness(0.5);
    }
`;

function FloatingBtn() {
    const buttonClick = () => {
        window.open("https://forms.gle/1YrWMZsgREjHGtui8", "_blank");
    }

    return(
        <Wrapper>
            {/* <Button onClick={buttonClick}>투표하기</Button> */}
            <VoteBtn onClick={buttonClick}/>
        </Wrapper>
    );
}

export default FloatingBtn;