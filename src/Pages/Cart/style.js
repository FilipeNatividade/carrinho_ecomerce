import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5vh 0;
`;

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 1vh 1vh 1vh #000;
  box-sizing: border-box;
  border-radius: 2vh;
  padding: 3vh 1vh;
  width: 30%;
`;

export const BikeImg = styled.img`
  width: 100%;
`;

export const PDisc = styled.p`
  height: 7vh;
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
`;

export const BackButton = styled(ButtonAdd)`
  background-color: #00003b;
`;
