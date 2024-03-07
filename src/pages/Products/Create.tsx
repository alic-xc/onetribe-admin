import {
  FormControl,
  Grid,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import {
  Button,
  ImageUploader,
  PageTitle,
  SelectInput,
  TextArea,
  TextInput,
} from "ontribe-admin-storybook";
import { Add, Cloud } from "iconsax-react";
import {
  useCreateProductMutation,
  useGetCategoriesQuery,
} from "../../services/productAPI";
import { Form, Formik } from "formik";
import { ProductSchema } from "../../schemas/ProductSchema";

const Create = () => {
  const { data: categories } = useGetCategoriesQuery({});
  const [createProduct] = useCreateProductMutation();
  const content = (
    <Stack
      direction="column"
      justifyContent="center"
      alignContent="center"
      my={3}
    >
      <Typography fontSize={16} fontWeight={500} textTransform="capitalize">
        <Cloud size={16} /> Upload Image
      </Typography>
      <Typography
        fontSize={14}
        fontWeight={400}
        color="secondary.dark"
        textTransform="capitalize"
        mt={1}
      >
        Upload a cover image for your product. <br /> File Format jpeg, png
        Recommened Size 600x600 (1:1)
      </Typography>
    </Stack>
  );
  return (
    <Formik
      initialValues={{
        name: "",
        category: "",
        description: "",
        price: "",
        availableColors: [],
        availableSizes: [],
        gender: "",
        quantity: "",
        images: [],
      }}
      enableReinitialize={true}
      validationSchema={ProductSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("stockQuantity", values.quantity);
        formData.append("gender", values.gender);
        formData.append("categoryId", values.category);
        formData.append("availableSizes", values.availableSizes);
        formData.append(
          "availableColors",
          values.availableColors.map((color) => {
            name: color;
          })
        );
        formData.append(
          "images",
          values.images.map((item) => item.data_url)
        );
        let response = createProduct(formData).unwrap();
        response.then((res) => {
          console.log(res);
        });
        response.catch((err) => {
          console.log(err);
        });
      }}
    >
      {({ values, errors, handleChange, setFieldValue }) => (
        <Form>
          <Grid container my={5} spacing={2}>
            <Grid item lg={12} md={12} p={1}>
              <PageTitle
                firstComponent={<Typography>Products</Typography>}
                secondComponent={
                  <Stack direction="row" gap={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      startIcon={<Add color="white" variant="Outline" />}
                    >
                      Save as draft
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      startIcon={<Add color="white" variant="Outline" />}
                    >
                      Save & publish
                    </Button>
                  </Stack>
                }
              />
            </Grid>

            <Grid item lg={8} md={8} p={1}>
              <Grid
                container
                p={2}
                m={0}
                borderRadius={3}
                spacing={2}
                bgcolor="white"
              >
                <Grid item lg={6} md={6}>
                  <Stack direction="column" spacing={2}>
                    <TextInput
                      title="Product Name"
                      name="name"
                      placeholder="Product Name"
                      size="small"
                      value={values.name}
                      error={errors.name}
                      onChange={handleChange}
                    />
                    <SelectInput
                      title="Category"
                      name="category"
                      size="small"
                      value={values.category}
                      onChange={handleChange}
                      menuItems={categories?.data?.map((item: any) => {
                        return { title: item.name, value: item._id };
                      })}
                    />
                    <FormControl variant="outlined" fullWidth>
                      <Typography fontSize={12} fontWeight={400} mb={0.7}>
                        Available Sizes
                      </Typography>
                      <Select
                        multiple
                        size="small"
                        value={values.availableSizes}
                        name="availableSizes"
                        onChange={handleChange}
                        renderValue={(selected) => selected.join(", ")}
                        sx={{
                          backgroundColor: "secondary.light",
                          p: 0.5,
                          borderRadius: 2,
                          outline: "none",
                          border: 0,
                          boxShadow: "none",
                          ".MuiOutlinedInput-notchedOutline": {
                            borderStyle: "none",
                          },
                        }}
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              border: "none", // Remove border on focus for menu items
                              boxShadow: "none", // Remove box shadow on focus for menu items
                            },
                          },
                        }}
                      >
                        {[
                          { title: "xs", value: "xs" },
                          { title: "md", value: "md" },
                          { title: "lg", value: "lg" },
                          { title: "xl", value: "xl" },
                          { title: "xxl", value: "xxl" },
                          { title: "xxxl", value: "xxxl" },
                        ].map((item: any) => (
                          <MenuItem key={item.value} value={item.value}>
                            <ListItemText primary={item.title} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl variant="outlined" fullWidth>
                      <Typography fontSize={12} fontWeight={400} mb={0.7}>
                        Available Color
                      </Typography>
                      <Select
                        multiple
                        size="small"
                        value={values.availableColors}
                        name="availableColors"
                        onChange={handleChange}
                        renderValue={(selected) => selected.join(", ")}
                        sx={{
                          backgroundColor: "secondary.light",
                          p: 0.5,
                          borderRadius: 2,
                          outline: "none",
                          border: 0,
                          boxShadow: "none",
                          ".MuiOutlinedInput-notchedOutline": {
                            borderStyle: "none",
                          },
                        }}
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              border: "none", // Remove border on focus for menu items
                              boxShadow: "none", // Remove box shadow on focus for menu items
                            },
                          },
                        }}
                      >
                        {[
                          { title: "Red", value: "red" },
                          { title: "Green", value: "green" },
                          { title: "Black", value: "black" },
                          { title: "White", value: "white" },
                        ].map((item: any) => (
                          <MenuItem key={item.value} value={item.value}>
                            <ListItemText primary={item.title} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <SelectInput
                      title="Gender"
                      name="gender"
                      size="small"
                      value={values.gender}
                      onChange={handleChange}
                      error={errors.gender}
                      menuItems={[
                        { title: "Male", value: "male" },
                        { title: "Female", value: "female" },
                      ]}
                    />
                    <TextInput
                      title="Price"
                      name="price"
                      placeholder="price"
                      size="small"
                      value={values.price}
                      onChange={handleChange}
                      error={errors.price}
                    />
                    <TextInput
                      title="Quantity"
                      name="quantity"
                      placeholder="Quantity in Stock"
                      size="small"
                      value={values.quantity}
                      onChange={handleChange}
                      error={errors.quantity}
                    />
                  </Stack>
                </Grid>
                <Grid item lg={6} md={6}>
                  <TextArea
                    name="description"
                    placeholder="Description"
                    size="small"
                    value={values.description}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} md={4} p={1}>
              <Stack
                padding={0}
                py={3}
                direction="column"
                alignItems="center"
                bgcolor="white"
                sx={{ height: "100%", width: "100%" }}
                borderRadius={3}
              >
                <ImageUploader
                  content={content}
                  onChange={(data: any) => {
                    console.log(data);
                    setFieldValue("images", data);
                  }}
                  mainContainerSx={{ m: 0, p: 0, width: 400, height: 400 }}
                  containerSx={{
                    m: 0,
                    p: 0,
                    width: 400,
                    height: 400,
                    backgroundColor: "secondary.main",
                  }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default Create;
