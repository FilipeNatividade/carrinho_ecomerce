import {
  HeaderMenu,
  LogoKenzie,
  MenuLogo,
  NameShop,
  MenuCart,
  H2MenuCart,
  ButtonCart,
} from "./style";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();
  return (
    <>
      <HeaderMenu>
        <MenuLogo>
          <LogoKenzie src="./image/logo_kenzie.png" />
          <NameShop>Kenzie Shop</NameShop>
        </MenuLogo>
        <MenuCart>
          <ButtonCart onClick={() => history.push("/cart")}>
            <ShoppingCartIcon />
            <H2MenuCart>Carrinho</H2MenuCart>
          </ButtonCart>
          <ButtonCart onClick={() => history.push("/")}>
            <HomeIcon />
            <H2MenuCart>Home</H2MenuCart>
          </ButtonCart>
        </MenuCart>
      </HeaderMenu>
    </>
  );
};

export default Menu;
