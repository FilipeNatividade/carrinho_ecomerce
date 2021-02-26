import { Container, BackButton, ContainerCards, DivHeader } from "./style";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Product from "../../components/Product/index";
const Cart = () => {
  const history = useHistory();
  const cart = useSelector((state) => state.cart);

  {
    console.log(cart);
  }

  return (
    <Container>
      <DivHeader>
        <h1>Meu carrinho</h1>
        <label>
          Total: {cart.reduce((acc, product) => acc + product.price, 0)}
        </label>
      </DivHeader>
      <ContainerCards>
        {cart.map((product, idx) => (
          <Product key={idx} product={product} isRemovable />
        ))}
      </ContainerCards>
      <BackButton onClick={() => history.push("/")}>Voltar</BackButton>
    </Container>
  );
};
export default Cart;
