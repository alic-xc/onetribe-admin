import * as Yup from "yup";

export const CategorySchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum of 3 characters.")
    .required("Name is required"),
});
