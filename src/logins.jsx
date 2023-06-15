
import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().email().required("*Please enter your email"),
  password: Yup.string().min(6).max(10).required("*Please enter your password"),
 
});

