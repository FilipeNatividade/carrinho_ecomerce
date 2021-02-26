import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../Store/Module/Cart/action";

import { Card, BikeImg, PDisc, ButtonAdd } from "./style";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Card>
        <h2>{product.name}</h2>
        <p>R$ {product.price}</p>
        <BikeImg src={product.url_img} />
        <PDisc>{product.description}</PDisc>
        {isRemovable ? (
          <ButtonAdd onClick={() => dispatch(removeFromCart(product.id))}>
            Remover item
          </ButtonAdd>
        ) : (
          <ButtonAdd onClick={() => dispatch(addToCart(product))}>
            Adicionar ao carrinho
          </ButtonAdd>
        )}
      </Card>
    </>
  );
};
export default Product;
