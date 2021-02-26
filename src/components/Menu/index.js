import {
  HeaderMenu,
  LogoKenzie,
  MenuLogo,
  NameShop,
  MenuCart,
  H2MenuCart,
  ButtonCart,
} from "./style";
// import logo_kenzie from "../../Image/logo_kenzie.png";
// import logo_kenzie from "../../../public/image/logo_kenzie.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import InputIcon from "@material-ui/icons/Input";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();
  return (
    <>
      <HeaderMenu>
        <MenuLogo>
          <LogoKenzie src="./logo_kenzie.png" />
          <NameShop>Kenzie Shop</NameShop>
        </MenuLogo>
        <MenuCart>
          <ButtonCart onClick={() => history.push("/cart")}>
            <ShoppingCartIcon />
            <H2MenuCart style={{ marginRight: "8vh" }}>Carrinho</H2MenuCart>
          </ButtonCart>
          <InputIcon />
          <H2MenuCart>Enter</H2MenuCart>
        </MenuCart>
      </HeaderMenu>
    </>
  );
};

export default Menu;
