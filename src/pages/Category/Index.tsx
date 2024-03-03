import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import {
  Button,
  Modal,
  PageTitle,
  CustomTable,
  Card,
} from "ontribe-admin-storybook";
import { Add, Bag2 } from "iconsax-react";
import React from "react";
import CreateCategoryForm from "./forms/CreateCategoryForm";
import { useGetCategoriesQuery } from "../../services/productAPI";

interface Category {
  _id: string;
  name: string;
  slug: string;
  products: any[]; // You can replace 'any' with the type of the 'products' array if you have a specific type for it
  __v: number;
}

interface CategoryResponse {
  status: string;
  data: Category[];
}

const Index = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const { data, refetch } = useGetCategoriesQuery({});
  const categories: CategoryResponse = data;

  const columns = [
    {
      Header: "Name",
      accessor: "name",
      className: "cell-center",
    },

    {
      Header: "Action",
      accessor: "action",
      className: "cell-center",
    },
  ];

  const rows = categories?.data?.map((item) => {
    return {
      // id: item._id,
      name: item.name,
      action: "",
    };
  });

  const action = () => {
    return (
      <Stack>
        <IconButton></IconButton>
      </Stack>
    );
  };

  const NoDataUI = (
    <Stack
      width="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
      height={600}
      bgcolor="white"
    >
      <Stack width="200px" direction="column" alignItems="center" spacing={2}>
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
        content={<CreateCategoryForm callback={() => refetch()} />}
      />{" "}
    </Stack>
  );

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
        {categories?.data?.length < 0 && NoDataUI}
        {categories?.data?.length > 0 && (
          <Card
            cardSx={{
              minHeight: 500,
            }}
            content={
              <CustomTable
                columns={columns}
                data={rows || []}
                isDisabledSelection={false}
                isPagination={true}
                isSearch={true}
                
              />
            }
          ></Card>
        )}
      </Grid>
    </Grid>
  );
};

export default Index;
