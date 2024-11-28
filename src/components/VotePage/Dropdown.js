import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    display: inline-block;
    margin: 30px 0px 10px 10px;
`;

const Button = styled.button`
    background-color: #121212;
    color: #F1F1F1;
    margin-bottom: 4px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
`;

const Content = styled.div`
    display: ${(props) => (props.show ? 'block' : 'none')};
    position: absolute;
    background-color: #1F1F1F;
    min-width: 170px;
    border-radius: 8px;
    z-index: 1;
`;

const DropdownItem = styled.div`
    padding: 12px 16px;
    cursor: pointer;
    color: #EAFFBC;
    font-size: 14px;
    font-weight: bold;
    &:hover {
        background-color: #333333;
    }
`;

const categories = [
    '올해의 프로젝트',
    '올해의 팀',
    '올해의 디버깅',
    '올해의 갓생러',
    '올해의 도파민 중독자',
    '올해의 쩝쩝박사'
];

function Dropdown({ selectedCategory, onCategorySelect }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [hover, setHover] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    const handleItemClick = (category) => {
        onCategorySelect(category);
        setShowDropdown(false);
    };

    const shouldShowDropdown = showDropdown || hover;

    return (
        <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Button onClick={toggleDropdown}>
                ⌵ {selectedCategory}
            </Button>
            <Content show={shouldShowDropdown}>
                {categories.map((category) => (
                    <DropdownItem key={category} onClick={() => handleItemClick(category)}>
                        {category}
                    </DropdownItem>
                ))}
            </Content>
        </Container>
    );
}

export default Dropdown;
