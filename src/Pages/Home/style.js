import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 10vw;
  padding: 5vh 0;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 0;
  }
`;
