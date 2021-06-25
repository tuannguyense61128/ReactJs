import React from "react";
import OrderedDrink from "./components/OrderedDrink";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

Cart.propTypes = {};

function Cart(props) {
  const orderedDrinks = useSelector((state) => state.CartReducer.cartItems);
  const history = useHistory();

  const navigateHomePage = () => {
    history.push("/");
  };

  return orderedDrinks.length ? (
    <table className="table table-striped table-Primary text-center">
      <thead>
        <tr className="bg-warning">
          <th className="align-middle" scope="col">
            STT
          </th>
          <th className="align-middle" scope="col">
            Tên món
          </th>
          <th className="align-middle" scope="col">
            Loại đồ uống
          </th>
          <th className="align-middle" scope="col">
            Số lượng đã đặt
          </th>
          <th className="align-middle" scope="col">
            Cập nhật lại số lượng
          </th>
          <th className="align-middle" scope="col">
            Huỷ món
          </th>
        </tr>
      </thead>
      <tbody>
        {orderedDrinks.map((drink, drinkNumber) => (
          <OrderedDrink
            key={drink.idDrink}
            drink={drink}
            drinkNumber={drinkNumber}
          />
        ))}
      </tbody>
    </table>
  ) : (
    <div className="text-center text-warning m-5">
      <h2>Chưa có đơn hàng,mời bạn quay lại đặt món</h2>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={navigateHomePage}
      >
        Quay lại
      </button>
    </div>
  );
}

export default Cart;
