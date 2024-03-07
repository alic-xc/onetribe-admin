import * as Yup from "yup";

// Define a schema for a single blob object
const BlobSchema = Yup.object().shape({
  blob: Yup.mixed().required("Blob object is required"),
  alt: Yup.string().required("Alt text is required"),
});

export const ProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum of 3 characters.")
    .required("Name is required"),
  description: Yup.string().required("Description is required"),
  quantity: Yup.number().required("Please enter a valid quantity"),
  category: Yup.string().required("Please, enter a valid category"),
  gender: Yup.string().required("Gender is required"),
  price: Yup.number().required("Please enter a valid price"),
  
  availableSizes: Yup.array()
    .of(Yup.string())
    .min(1, "At least one size is required")
    .required("Available sizes is required"),
  availableColors: Yup.array()
    .of(Yup.string())
    .min(1, "At least one color is required")
    .required("Available colors is required"),
});
