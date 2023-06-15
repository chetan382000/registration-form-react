import * as Yup from "yup";

export const signUpSchema = Yup.object({
  fname: Yup.string().min(2).max(25).required("*Please enter your first name"),
  lname: Yup.string().min(2).max(25).required("*Please enter your last  name"),
  email: Yup.string().email().required("*Please enter your email"),
  number: Yup.number().min(10).typeError("number only") .required("*Please enter your number"),
  password: Yup.string().min(6).max(10).required("*Please enter your password"),
  conformPassword: Yup.string()
    .required("*Please enter your Conformpassword")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

