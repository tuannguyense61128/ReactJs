import { FastField, Form, Formik } from "formik";
import React from "react";
import QuantityField from "../../components/FormControls/QuantityField";
import * as yup from "yup";
AddToCartForm.propTypes = {};

function AddToCartForm({ onSubmit }) {
  const initialValues = {
    quantity: 0,
  };
  let validationSchema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, "Minimum value is 1")
      .required("please enter quanity")
      .typeError("please enter a number"),
  });
  const handleDrinkAddToCart = (formValue) => {
    if (onSubmit) {
      onSubmit(formValue);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(formValue) => handleDrinkAddToCart(formValue)}
      >
        {() => {
          return (
            <Form>
              <FastField
                name="quantity"
                component={QuantityField}
                label="quantity"
              />
              <button type="submit" className="btn btn-primary btn-lg w-100">
                Add To Cart
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default AddToCartForm;
