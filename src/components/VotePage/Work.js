import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.div`
    width: 480px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #B3F624;
    border-radius: 12px;
    box-shadow: 3px 3px 10px rgba(179, 246, 36, 0.3);
    padding: 20px;
    background-color: #1B1B1B;
    margin-left: 12px;
    padding: 20px;
`;

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    gap: 20px;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Img = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 8px;
    cursor: pointer;
`;

const Button = styled.button`
    width: 70%;
    background-color: transparent;
    color: #B3F624;
    border: 1px solid #B3F624;
    border-radius: 16px;
    padding: 4px 10px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s;
    &:hover {
        background-color: #B3F624;
        color: #2C2C2C;
    }
`;

const Right = styled.div`    
    flex: 1;
`;

const Title = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #F1F1F1;
    margin: 0;|
`;

const Name = styled.p`
    font-size: 15px;
    font-weight: bold;
    color: #C1DE83;
    margin: 10px 0 10px;
`;

const Text = styled.p`
    font-size: 14px;
    color: #b3b3b3;
    margin: 2px 0;
`;

const PrintLargeImage = styled.div`
    display: ${({ show }) => (show ? "flex" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const LargeImage = styled.img`
    max-width: 90%;
    max-height: 90%;
    width: auto;
    height: auto;
    border-radius: 8px;
    cursor: pointer;
`;

function Work({ image, title, name, content, notion }) {
    const [isImageEnlarged, setImageEnlarged] = useState(false);

    const toggleImageEnlarge = () => {
        setImageEnlarged(!isImageEnlarged);
    }

    const handleDetailClick = () => {
        if (notion) {
            window.open(notion, "_blank");
        }
    };

    return (
        <>
            <Wrapper>
                <Container>
                    <Left>
                        <Img src={image} onClick={toggleImageEnlarge} />
                        <Button onClick={handleDetailClick}>상세 설명</Button>
                    </Left>
                    <Right>
                        <Title>{title}</Title>
                        <Name>{name}</Name>
                        <Text>{content}</Text>
                    </Right>
                </Container>
            </Wrapper>

            <PrintLargeImage show={isImageEnlarged} onClick={toggleImageEnlarge}>
                <LargeImage src={image} />
            </PrintLargeImage>
        </>
    );
}

export default Work;