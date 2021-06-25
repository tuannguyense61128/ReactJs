import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import AddToCartForm from "../../forms/AddToCartForm";
import styles from "./DetailDrink.module.css";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { CartAction, GlobalActions } from "../../redux/rootAction";

function DetailDrink(props) {
  const [drink, setDrink] = useState("");
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const {
    params: { drinkId },
  } = useRouteMatch();

  const handleDrinkAddToCart = async (formValue) => {
    const newDrink = {
      idDrink: drink.idDrink,
      strDrink: drink.strDrink,
      strCategory: drink.strCategory,
      strDrinkThumb: drink?.strDrinkThumb,
      quantity: formValue.quantity,
    };
    dispatch(CartAction.addToCart(newDrink));
    enqueueSnackbar("Đặt món thành công", { variant: "success" });
  };
  const getDetailDrink = useCallback(() => {
    dispatch(GlobalActions.toggleLoading(true));
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
      )
      .then((drink) => {
        setDrink(drink.data.drinks[0]);
        dispatch(GlobalActions.toggleLoading(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(GlobalActions.toggleLoading(false));
      });
  }, [dispatch, drinkId]);

  useEffect(() => {
    getDetailDrink();
  }, [getDetailDrink]);

  return drink ? (
    <div className={styles.box}>
      <div className="d-none d-lg-block">
        <img
          src={drink?.strDrinkThumb}
          alt="not found"
          width="100%"
          className={styles.image}
        />
      </div>
      <div className={styles.detail}>
        <h1>
          Tên món : <span>{drink.strDrink}</span>
        </h1>
        <h4>
          Loại đồ uống : <span>{drink.strCategory}</span>
        </h4>
        <h4 component="span" fontSize="16px" fontWeight="bold">
          Nguyên liệu:{" "}
          <span>
            {drink.strIngredient1 ? `${drink.strIngredient1},` : null}{" "}
            {drink.strIngredient2 ? `${drink.strIngredient2},` : null}{" "}
            {drink.strIngredient3 ? `${drink.strIngredient3},` : null}{" "}
            {drink.strIngredient4 ? `${drink.strIngredient4}` : null}
          </span>
        </h4>
        <h4>
          Quy trình pha chế: <span>{drink.strInstructions}</span>
        </h4>
        <h4>
          Ly đựng: <span>{drink.strGlass}</span>
        </h4>
        <div>
          <AddToCartForm onSubmit={handleDrinkAddToCart} />
        </div>
      </div>
    </div>
  ) : null;
}

export default DetailDrink;
