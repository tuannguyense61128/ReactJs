import React from "react";
import styles from "./GlobalLoading.module.css";
import { useSelector } from "react-redux";
GlobalLoading.propTypes = {};

function GlobalLoading(props) {
  const isLoading = useSelector((state) => state.GlobalReducer.isLoading);

  return (
    <div>
      {isLoading && (
        <div className={styles.loader}>
          <div className={styles.loaderInner}>
            <label>●</label>
            <label>●</label>
            <label>●</label>
            <label>●</label>
            <label>●</label>
            <label>●</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default GlobalLoading;
