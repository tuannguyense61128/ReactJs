import { ErrorMessage } from "formik";
import React from "react";
import styles from "./QuantityField.module.css";

QuantityField.propTypes = {};

function QuantityField(props) {
  const { field, form } = props;
  const { value, name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <div className="w-100">
      <div className="box" style={{ display: "flex" }}>
        <button
          type="button"
          onClick={() => form.setFieldValue(name, value - 1)}
          style={{ flex: 1 }}
        >
          <span className={styles.icon}>
            <i className="fas fa-minus-circle"></i>
          </span>
        </button>
        <input
          className={styles.input}
          type="number"
          {...field}
          invalid={String(!!showError)}
          style={{ flex: 1 }}
        />
        <button
          type="button"
          onClick={() => {
            form.setFieldValue(name, value + 1);
          }}
          style={{ flex: 1 }}
        >
          <span className={styles.icon}>
            <i className="fas fa-plus-circle"></i>
          </span>
        </button>
      </div>
      <ErrorMessage name={name}>
        {(msg) => <div className={styles.errorMessage}>{msg}</div>}
      </ErrorMessage>
    </div>
  );
}

export default QuantityField;
