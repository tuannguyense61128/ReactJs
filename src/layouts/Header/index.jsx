import React from "react";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CartAction } from "../../redux/rootAction";
import { checkToken } from "../../utils/localStorage";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const numberItemsInCart = useSelector(
    (state) => state.CartReducer.cartItems.length
  );

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    dispatch(CartAction.refreshCarteFromCart());
    history.push("/login");
  };
  const navigateUrl = (path) => {
    history.push(path);
  };

  return (
    <div className={styles.box}>
      {checkToken() ? (
        <div className={styles.container}>
          <div>
            <button
              className={styles.button}
              onClick={() => {
                navigateUrl("/");
              }}
            >
              Home
            </button>
            <button
              className={styles.button}
              onClick={() => {
                navigateUrl("/cart");
              }}
            >
              Cart
              <span
                className={styles.numberItemsInCart}
              >{`(${numberItemsInCart})`}</span>
            </button>
          </div>
          <button className={styles.button} onClick={handleLogout}>
            Log out
          </button>
        </div>
      ) : (
        <div className={styles.title}>
          <div>https://www.thecocktaildb.com/api.php</div>
        </div>
      )}
    </div>
  );
}

export default Header;
