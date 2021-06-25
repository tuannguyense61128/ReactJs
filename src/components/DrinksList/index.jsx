import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import DetailMenu from "./components/DetailMenu";
import { useDispatch } from "react-redux";
import { GlobalActions } from "../../redux/slices/globalSlice";

DrinksList.propTypes = {};
function DrinksList(props) {
  const [drinks, setDrinks] = useState([]);
  const dispatch = useDispatch();

  const getDrinksList = useCallback(() => {
    dispatch(GlobalActions.toggleLoading(true));
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
      .then((drinkList) => {
        setDrinks(drinkList.data.drinks);
        dispatch(GlobalActions.toggleLoading(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(GlobalActions.toggleLoading(false));
      });
  }, [dispatch]);

  useEffect(() => {
    getDrinksList();
  }, [getDrinksList]);

  return (
    <div>
      <DetailMenu drinks={drinks} />
    </div>
  );
}

export default DrinksList;
