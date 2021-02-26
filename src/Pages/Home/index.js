import { ProductList } from "../../data/ProductList";
import { Container, Card, BikeImg, PDisc, ButtonAdd } from "./style";
const Home = () => {
  return (
    <Container>
      {ProductList.map((crr, idx) => (
        <Card key={idx}>
          <h2>{crr.name}</h2>
          <p>R$ {crr.price}</p>
          <BikeImg src={crr.url_img} />
          <PDisc>{crr.description}</PDisc>
          <ButtonAdd>Add To cart</ButtonAdd>
        </Card>
      ))}
    </Container>
  );
};
export default Home;
