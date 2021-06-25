import React from "react";
import AddToCartForm from "../../../../forms/AddToCartForm";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CartAction } from "../../../../redux/rootAction";
Drink.propTypes = {};

function Drink({ drink, drinkNumber }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleDrinkAddToCart = async (formValue) => {
    const newDrink = {
      idDrink: drink.idDrink,
      strDrink: drink.strDrink,
      strCategory: drink.strCategory,
      strDrinkThumb: drink.strDrinkThumb,
      quantity: formValue.quantity,
    };
    dispatch(CartAction.addToCart(newDrink));
    enqueueSnackbar("Đặt món thành công", { variant: "success" });
  };
  const navigateDetailPage = () => {
    history.push(`/${drink.idDrink}`);
  };

  return (
    <tr className="bg-warning">
      <td onClick={navigateDetailPage} className="align-middle">
        <h3>{drinkNumber + 1}</h3>
      </td>
      <td onClick={navigateDetailPage} className="align-middle">
        <h4>{drink.strDrink}</h4>
      </td>
      <td onClick={navigateDetailPage} className="align-middle">
        <h4>{drink.strCategory}</h4>
      </td>
      <td onClick={navigateDetailPage} className="align-middle">
        {drink.strDrinkThumb ? (
          <div className="m-auto w-50">
            <img
              className="img-fluid"
              src={drink.strDrinkThumb}
              alt="not found"
            />
          </div>
        ) : (
          <div></div>
        )}
      </td>
      <td style={{ width: "250px" }} className="table-success align-middle">
        <h5>Số lượng</h5>
        <AddToCartForm onSubmit={handleDrinkAddToCart} />
      </td>
    </tr>
  );
}

export default Drink;
