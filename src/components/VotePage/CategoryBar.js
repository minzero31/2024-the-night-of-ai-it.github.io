import styled from "styled-components";
import React, { useState } from "react";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Table = styled.div`
    width: 98%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
`;

const TableCell = styled.div`
    padding: 8px;
    font-size: 16px;
    //font-weight: bold;
    text-align: center;
    border: 1px solid #B3F624;
    background-color: ${(props) => (props.isSelected ? "#B3F624" : "#121212")};
    color: ${(props) => (props.isSelected ? "#121212" : "#F1F1F1")};
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        color: #121212;
        background-color: #B3F624;
    }
`;

const Print = styled.div`
    width: 98%;
    margin-top: 20px;
    padding: 10px;
    border: none;
`;

function CategoryBar() {
    const [selected, setSelected] = useState(null);
    const [hovered, setHovered] = useState(null);

    const categories = ["프로젝트", 
                        "팀", 
                        "디버깅", 
                        "갓생러", 
                        "도파민 중독자", 
                        "쩝쩝박사"];

    return(
        <Wrapper>
            <Table>
                {categories.map((category, index) => (
                    <TableCell
                        key={index}
                        isSelected={selected === index}
                        isHovered={hovered === index}
                        onClick={() => setSelected(index)}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {category}
                    </TableCell>
                ))}
            </Table>
            <Print>
                {selected !== null ? `Selected: ${categories[selected]}` : ""}
            </Print>
        </Wrapper>
    );
}

export default CategoryBar;