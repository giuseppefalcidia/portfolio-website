import React from 'react';
import styled from 'styled-components';

const StyledBurger = styled.button`
  grid-area: menu;

  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 33px;
  height: 29px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;

  &:focus {
    outline: none;
  }



  div {
    width: ${({ open }) => open ? '27px' : '30px'};
    height: 5.5px;

    background: black;
    border-radius: 15px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 0.5px;
    z-index: 1000;
    transition: 210ms;

    &:hover{
        transition: 1s;
        width: ${({ open }) => open ? '27px' : '35px'};
        background: ${({ open }) => open ? 'black' : '#A2FFE6'};
      }

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }


  @media (max-width: 1000px) {
    height: 20px;

    
    div {
      width: 20px;
      height: 4.5px;
      
      &:hover{
        width: 20px;
        background: black;
      }
    }
  }


`

export const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}