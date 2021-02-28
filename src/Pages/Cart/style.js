import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 37rem;
  justify-content: space-around;
  padding: 5vh 0;

  @media (min-width: 600px) {
    height: 30.2rem;
  }
`;

export const DivHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 600px) {
    align-items: center;
    flex-direction: row;
    margin: 0 auto;
    width: 90%;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
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
  margin: 5vw auto;
`;
