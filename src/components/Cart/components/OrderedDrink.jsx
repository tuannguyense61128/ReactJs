import React from "react";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { CartAction } from "../../../redux/rootAction";
import UpdateCartForm from "../../../forms/UpdateToCartForm";

OrderedDrink.propTypes = {};

function OrderedDrink({ drink, drinkNumber }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleDrinkRemove = (drinkId) => {
    dispatch(CartAction.removeFromCart(drinkId));
    enqueueSnackbar("Huỷ đặt món thành công", { variant: "success" });
  };
  const handleDrinkUpdate = (formValues) => {
    const payload = {
      drinkId: drink.idDrink,
      quantity: formValues.quantity,
    };
    dispatch(CartAction.updateDrinkQuantity(payload));
    enqueueSnackbar("Cập nhật số lượng thành công", { variant: "success" });
  };

  return (
    <tr className="bg-warning">
      <td className="align-middle">
        <h3>{drinkNumber + 1}</h3>
      </td>
      <td className="align-middle">
        <h4>{drink.strDrink}</h4>
      </td>
      <td className="align-middle">
        <h4>{drink.strCategory}</h4>
      </td>
      <td className="align-middle">
        <h4>{drink.quantity}</h4>
      </td>
      <td className="align-middle">
        <UpdateCartForm
          quantity={drink.quantity}
          onSubmit={handleDrinkUpdate}
        />
      </td>
      <td className="align-middle">
        <div>
          <button
            onClick={() => {
              handleDrinkRemove(drink.idDrink);
            }}
            className="btn  btn-danger btn-lg w-100 h-50"
          >
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
}

export default OrderedDrink;
