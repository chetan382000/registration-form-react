import React, { useState } from "react";

import { useFormik } from "formik";

import { LoginSchema } from "./logins";
import "./App.css";

const initialValues = {
  email: "",

  password: "",
};

const Login = () => {
  const [sub, setSub] = useState("");

  const handleClick = () => {
    
    validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        alert("Please Fill Login Form");
      } else {
        alert("Login Form is valid ?");
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
    initialValues: { password: "", email: "" },
    validationSchema: LoginSchema,
    onClick: () => {
      console.log("onclick");
    },
    onClicks: () => {
      console.log("onClik");
    },
    onSubmit: (value, action) => {
      console.log(value);

      setSub("Login Successfully");
      action.resetForm();
    },
  });

  return (
    <>
      <div className="container">
        <div className="apply_box">
          <h1>Login Form</h1>

          <form onSubmit={handleSubmit}>
            <div className="form_container">
              <div className="form_control">
                <label> Email</label>
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
            </div>
            <div className="button_container">
              <button type="submit" onClick={handleClick}>
                Login
              </button>
            </div>
            <p className="submit"> {sub}</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
