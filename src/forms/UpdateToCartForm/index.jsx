import { FastField, Form, Formik } from "formik";
import React from "react";
import QuantityField from "../../components/FormControls/QuantityField";
import * as yup from "yup";

UpdateCartForm.propTypes = {};

function UpdateCartForm({ onSubmit, quantity }) {
  const initialValues = {
    quantity: quantity,
  };
  let validationSchema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, "Minimum value is 1")
      .required("please enter quanity")
      .typeError("please enter a number"),
  });
  const handleFormSubmit = (formValue) => {
    if (onSubmit) {
      onSubmit(formValue);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(formValue) => handleFormSubmit(formValue)}
      >
        {() => {
          return (
            <Form>
              <FastField
                name="quantity"
                component={QuantityField}
                label="quantity"
              />
              <div></div>
              <button type="submit" className="btn btn-primary btn-lg w-100">
                Change
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default UpdateCartForm;
