import React from "react";
import Drink from "../Drink";
import styles from "./DetailMenu.module.css";

function DetailMenu({ drinks }) {
  return (
    <div className={styles.detailMenu}>
      <div className={styles.numberOfDrinks}>
        <div className={styles.title}>Number Of Drink</div>
        <div className={styles.result}>{drinks.length}</div>
      </div>
      <table className="table table-striped table-Primary">
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
              Hình ảnh
            </th>
            <th className="align-middle table-success" scope="col">
              Thêm vào Cart
            </th>
          </tr>
        </thead>
        <tbody>
          {drinks.map((drink, drinkNumber) => (
            <Drink
              key={drink.idDrink}
              drink={drink}
              drinkNumber={drinkNumber}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DetailMenu;
