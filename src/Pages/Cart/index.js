import {
  Container,
  Card,
  BikeImg,
  PDisc,
  ButtonAdd,
  BackButton,
} from "./style";

import { useHistory } from "react-router-dom";
const Cart = () => {
  const history = useHistory();
  return (
    <Container>
      {/* {
        <Card key={idx}>
          <h2>{crr.name}</h2>
          <p>R$ {crr.price}</p>
          <BikeImg src={crr.url_img} />
          <PDisc>{crr.description}</PDisc>
          <ButtonAdd>Add To cart</ButtonAdd>
        </Card>
      ))} */}

      <BackButton onClick={() => history.push("/")}>Voltar</BackButton>
    </Container>
  );
};
export default Cart;
