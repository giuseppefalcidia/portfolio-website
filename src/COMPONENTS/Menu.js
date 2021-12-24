import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Menu = ({ open, setOpen }) => {
    return (
        <StyledMenu open={open} setOpen={setOpen}>


            <Link className="Link" exact="true" to="/" onClick={() => setOpen(!open)}>Home</Link>
            <Link className="Link" to="/hire" onClick={() => setOpen(!open)}>Hire</Link>
            <Link className="Link" to="/about" onClick={() => setOpen(!open)}>About</Link>
            <Link className="Link" exact="true" to="/work" onClick={() => setOpen(!open)}>Projects</Link>
            <Link className="Link" to="/contact" onClick={() => setOpen(!open)}>Contact</Link>


        </StyledMenu>
    )
}



const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FFFFFF;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 101;

  border-radius: 15px;

  @media (max-width: 1000px) {
      width: 100%;
      background: #f8f8f8;
    }

  a {
    font-size: 1.5rem;
    font-family: 'GlacialIndifferenceRegular';
    text-transform: uppercase;
    padding: .9rem 0;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: 000000;
    text-decoration: none;
    transition: color 0.15s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #17a2b8;
    }
  }
`

