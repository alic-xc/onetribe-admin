import { Grid, Stack, Typography } from "@mui/material";
import {
  Button,
  ImageUploader,
  PageTitle,
  SelectInput,
  Switch,
  TextArea,
  TextInput,
} from "ontribe-admin-storybook";
import { Add, Cloud } from "iconsax-react";

const Create = () => {
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
    <Grid container my={5} spacing={2}>
      <Grid item lg={12} md={12} p={1}>
        <PageTitle
          firstComponent={<Typography>Products</Typography>}
          secondComponent={
            <Stack direction="row" gap={2}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<Add color="white" variant="Outline" />}
              >
                Save as draft
              </Button>
              <Button
                variant="contained"
                color="primary"
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
                value=""
              />
              <SelectInput
                title="Category"
                name="name"
                size="small"
                value=""
                menuItems={[{ title: "Category", value: "no" }]}
              />

              <SelectInput
                title="Pattern Available"
                name="name"
                size="small"
                value=""
                menuItems={[{ title: "Category", value: "no" }]}
              />
              <SelectInput
                title="Gender"
                name="gender"
                size="small"
                value=""
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
                value=""
              />
              <TextInput
                title="Quantity"
                name="name"
                placeholder="Quantity in Stock"
                size="small"
                value=""
              />
            </Stack>
          </Grid>
          <Grid item lg={6} md={6}>
            <TextArea
              name="name"
              placeholder="Description"
              size="small"
              value=""
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
            mainContainerSx={{ m: 0, p: 0, width: 400, height: 400 }}
            containerSx={{ m: 0, p: 0, backgroundColor: "secondary.main" }}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Create;
