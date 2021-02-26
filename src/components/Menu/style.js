import styled from "styled-components";

export const HeaderMenu = styled.header`
  background-color: #00003b;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20vh;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const MenuLogo = styled.div`
  align-items: center;
  display: flex;
`;

export const LogoKenzie = styled.img`
  height: 20vh;
`;

export const NameShop = styled.h1`
  color: #fff;
  font-size: 4vh;

  @media (min-width: 600px) {
    margin-top: 12vh;
  }
`;

export const MenuCart = styled.div`
  box-sizing: border-box;
  background-color: #00003b;
  color: #fff;
  display: flex;
  height: 5vh;
  justify-content: space-between;
  margin-top: -1px;

  @media (min-width: 600px) {
    height: 20vh;
    padding-top: 12vh;
  }
`;
export const H2MenuCart = styled.h2`
  font-size: 2vh;
  margin: 0 1vh;
`;

export const ButtonCart = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: #fff;
  display: flex;
  justify-content: center;
  outline: none;
  width: 20vh;
  &:hover {
    cursor: pointer;
  }
`;
