import Product from "../../components/Product/index";
import { productList } from "../../data/ProductList";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      {productList.map((crr, idx) => (
        <Product key={idx} product={crr} />
      ))}
    </Container>
  );
};
export default Home;
