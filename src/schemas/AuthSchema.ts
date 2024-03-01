import { isValidPhoneNumber } from "react-phone-number-input";
import * as Yup from "yup";

const SUPPORTED_FORMATS: string[] = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "application/pdf",
];

const digitsOnly = (value: string) => /^\d+$/.test(value);

export const LoginSchema = Yup.object().shape({
  email: Yup.string().test({
    name: "phone",
    message: "Check phone number",
    test: function (value) {
      if (
        Yup.string().email().isValidSync(value) ||
        isValidPhoneNumber(value)
      ) {
        return true;
      } else {
        return false;
      }
    },
  }),
  password: Yup.string().min(8).required("Password is required"),
});