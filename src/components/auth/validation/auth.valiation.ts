import { localization } from "@/constant/localization";
import * as yup from "yup";

const {
  auth: {
    validation: { errorEmptyField, errorPasswordRegex, errorPasswordLength },
  },
} = localization;

const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)/;
export const registerValidationSchema = yup.object({
  username: yup.string().required(errorEmptyField).lowercase().trim(),
  firstname: yup.string().required(errorEmptyField).trim(),
  lastname: yup.string().required(errorEmptyField).trim(),
  password: yup
    .string()
    .required(errorEmptyField)
    .min(8, errorPasswordLength)
    .matches(passwordRegex, errorPasswordRegex),
  phoneNumber: yup.string().required(errorEmptyField).trim(),
  address: yup.string().required(errorEmptyField).trim(),
});

export const loginValidationSchema = yup.object({
  username: yup.string().required(errorEmptyField),
  password: yup.string().required(errorEmptyField),
});
