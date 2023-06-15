import React, { useState } from "react";
import "./App.css";

import { useFormik } from "formik";
import { signUpSchema } from "./schema";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  number: "",
  password: "",
  conformPassword: "",
};





const Registration = () => {
  const [submit, setSubmit] = useState("");

  const handleClick = () => {
    validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        alert("Please Fill Form");
      } else {
        alert("Form is validated! Submitting the form...");
      }
    });
  };

 

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    validateForm,

  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onClick: () => {
      console.log("onclick");
    },
    onClicks:()=>{
      console.log('onClik')
    }
    ,
    onSubmit: (values, action) => {
      console.log(values);

      // alert("Form is validated! Submitting the form...");
      setSubmit("Your Form Is Successfully Submited");
      action.resetForm();
    },
  
  });

  return (
    <>
      <div className="container">
        <div className="apply_box">
          <h1>Registration Form</h1>

          <form onSubmit={handleSubmit}>
            <div className="form_container">
              <div className="form_control">
                <label for="first_name"> First Name </label>

                <input
                  value={values.fname}
                  onChange={handleChange}
                  type="text"
                  name="fname"
                  placeholder="Enter First Name..."
                />
                {errors.fname && touched.fname ? (
                  <p className="form-error"> {errors.fname}</p>
                ) : null}
              </div>
              <div className="form_control">
                <label for="last_name"> Last Name </label>
                <input
                  value={values.lname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="lname"
                  placeholder="Enter Last Name..."
                />
                {errors.lname && touched.lname ? (
                  <p className="form-error"> {errors.lname}</p>
                ) : null}
              </div>
              <div className="form_control">
                <label for="email"> Email </label>

                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  name="email"
                  placeholder="Enter Email..."
                />
                {errors.email && touched.email ? (
                  <p className="form-error"> {errors.email}</p>
                ) : null}
              </div>
              <div className="form_control">
                <label for="job_role"> Number </label>
                <input
                  value={values.number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="number"
                  placeholder="Enter Number..."
                />
                {errors.number && touched.number ? (
                  <p className="form-error"> {errors.number}</p>
                ) : null}
              </div>

              <div className="form_control">
                <label for="city"> Password</label>
                <input
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  name="password"
                  placeholder="Enter Password..."
                />
                {errors.password && touched.password ? (
                  <p className="form-error"> {errors.password}</p>
                ) : null}
              </div>
              <div className="form_control">
                <label for="pincode">Conform Password </label>
                <input
                  value={values.conformPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  name="conformPassword"
                  placeholder="Enter conform Password..."
                />
                {errors.conformPassword && touched.conformPassword ? (
                  <p className="form-error"> {errors.conformPassword}</p>
                ) : null}
              </div>
            </div>

            <div className="button_container">
              <button type="submit" onClick={handleClick}>
                Apply Now
              </button>
            </div>
            <p className="submit"> {submit}</p>
          </form>

        </div>
      </div> 
    </>
  );
};

export default Registration;
