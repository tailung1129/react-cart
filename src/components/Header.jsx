import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  CartStateContext,
  CartDispatchContext,
  toggleCartPopup
} from "contexts/cart";
import { CommonDispatchContext, setSearchKeyword } from "contexts/common";
import CartPreview from "components/CartPreview";
import logo from "../assets/img/header/image18.png";
import search from "../assets/img/header/search.png";
import cart from "../assets/img/header/cart.png";
import helpline from "../assets/img/header/helpLine.png";
import bucket from "../assets/img/header/bucket.png";
import list from "../assets/img/header/list.png"
const Header = (props) => {
  const { items: cartItems, isCartOpen } = useContext(CartStateContext);
  const commonDispatch = useContext(CommonDispatchContext);
  const cartDispatch = useContext(CartDispatchContext);
  const cartQuantity = cartItems.length;
  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0);

  const handleSearchInput = (event) => {
    return setSearchKeyword(commonDispatch, event.target.value);
  };

  const handleCartButton = (event) => {
    event.preventDefault();
    return toggleCartPopup(cartDispatch);
  };

  return (
    <header>
      <div className="header">
        <div className="helpline">
          <div>Help Line</div>
          <div className="yellow_letter">1-800-700-600</div>
        </div>
        <div>
          <Link to="/">
            <img className="logo" src={logo} alt="Veggy Brand Logo" />
          </Link>
        </div>
        <div>
          <button className="search_button"><img src={search} /></button>
          <button className="noneButton"><img className="bucket_button" src={bucket} /></button>
          <button className="cart_button"><img src={cart} /></button>
          <button className="list_button"><img className="list_image" src={list} /></button>

        </div>
      </div>
    </header>
  );
};

export default Header;
