import { Box, Grid, Stack, Typography } from "@mui/material";
import { Button, Modal, PageTitle } from "ontribe-admin-storybook";
import { Add, Bag2 } from "iconsax-react";
import React from "react";
import CreateCategoryForm from "./forms/CreateCategoryForm";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <Grid container my={5}>
      <Grid item lg={12} md={12} p={1}>
        <PageTitle
          firstComponent={<Typography>Category</Typography>}
          secondComponent={
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="contained"
              color="primary"
              startIcon={<Add color="white" variant="Outline" />}
            >
              Add Category
            </Button>
          }
        />
      </Grid>

      <Grid item lg={12} p={1}>
        <Stack
          width="100%"
          direction="column"
          justifyContent="center"
          alignItems="center"
          height={600}
          bgcolor="white"
        >
          <Stack
            width="200px"
            direction="column"
            alignItems="center"
            spacing={2}
          >
            <Box>
              <Bag2 size={32} color="black" />
            </Box>
            <Typography fontSize={20} fontWeight={500}>
              No Category Yet?
            </Typography>
            <Typography fontSize={14}>
              Add products to your store and start selling to see orders here.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Add color="white" variant="Outline" />}
            >
              New Category
            </Button>
          </Stack>
          <Modal
            
            title={<Typography>Add Category</Typography>}
            open={isModalOpen}
            size="xs"
            handleClose={() => setIsModalOpen(false)}
            content={<CreateCategoryForm />}
          />{" "}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Index;
