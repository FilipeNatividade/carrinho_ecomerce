import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 1vh 1vh 1vh #000;
  box-sizing: border-box;
  border-radius: 2vh;
  font-size: 1.5rem;
  margin: 5vw auto;
  padding: 3vh 1vh;
  width: 80%;

  @media (min-width: 600px) {
    width: 30%;
    font-size: 1rem;
  }
`;

export const BikeImg = styled.img`
  width: 100%;
`;

export const PDisc = styled.p`
  box-sizing: content-box;
  padding: 5vh 0;
  height: 8vh;
`;

export const ButtonAdd = styled.button`
  background-color: #00003b;
  border-radius: 1vh;
  border: none;
  color: #fff;
  font-weight: bold;
  outline: none;
  padding: 1vh;
  text-transform: uppercase;
  width: 20vh;
  &:hover {
    cursor: pointer;
  }
`;
