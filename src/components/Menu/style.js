import styled from "styled-components";

export const HeaderMenu = styled.header`
  background-color: #00003b;
  display: flex;
  justify-content: space-between;
  height: 20vh;
  width: 100vw;
`;

export const MenuLogo = styled.div`
  display: flex;
`;

export const LogoKenzie = styled.img`
  height: 20vh;
`;

export const NameShop = styled.h1`
  color: #fff;
  font-size: 4vh;
  margin-top: 12vh;
`;

export const MenuCart = styled.div`
  box-sizing: border-box;
  color: #fff;
  display: flex;
  height: 20vh;
  padding-top: 12vh;
`;

export const ButtonCart = styled.button`
  color: #fff;
  display: flex;
  width: 20vh;
  background-color: transparent;
  outline: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
export const H2MenuCart = styled.h2`
  font-size: 2vh;
  margin: 0 5vh;
  margin-left: 1vh;
`;
