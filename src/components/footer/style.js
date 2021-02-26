import styled from "styled-components";
export const Container = styled.footer`
  align-items: center;
  background-color: #00003b;
  color: #fff;
  display: flex;
  font-size: 1.2rem;
  justify-content: space-around;
  height: 4rem;
  @media (min-width: 600px) {
    height: 3rem;
  }
`;

export const NetWorks = styled.a`
  color: #fff;
  font-size: 0.7rem;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;
