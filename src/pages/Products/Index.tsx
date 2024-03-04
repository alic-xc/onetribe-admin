import React from "react";
import { Box, Grid, Stack, SxProps, Typography } from "@mui/material";
import { Button, PageTitle, Widget } from "ontribe-admin-storybook";
import { Add, Bag2, BoxAdd, Money } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import EmptyUI from "../../components/EmptyUI";
import { useGetProductsQuery } from "../../services/productAPI";

interface Item {
  containerSx: SxProps;
  icon: React.ReactNode;
  items: Items[];
}

type Items = {
  title: string;
  value: string;
  secondaryValue?: string;
};

interface Color {
  name: string;
  _id: string;
}

interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  images: string[];
  stockQuantity: number;
  availableColors: Color[];
  availableSizes: string[];
  shippingPrice: number | null;
  price: number;
  category: string;
  gender?: string;
  __v: number;
}

interface ProductsResponse {
  status: string;
  data: Product[];
}

const Index = () => {
  const { data, isLoading } = useGetProductsQuery({});
  const products: ProductsResponse = data;
  const navigate = useNavigate();
  const containerSx: SxProps = { border: "none" };
  const primaryWidgets: Item[] = [
    {
      containerSx: containerSx,
      icon: <Money size="20" color="black" variant="Outline" />,
      items: [
        { title: "All Product", value: "0", secondaryValue: "" },
        { title: "Active", value: "0", secondaryValue: "" },
      ],
    },
    {
      containerSx: containerSx,
      icon: <BoxAdd size="20" color="black" variant="Outline" />,
      items: [
        { title: "Low Stock", value: "0", secondaryValue: "" },
        { title: "Expired", value: "0", secondaryValue: "" },
        { title: "Star Rating", value: "0", secondaryValue: "" },
      ],
    },
  ];

  return (
    <Grid container my={5}>
      <Grid item lg={12} md={12} p={1}>
        <PageTitle
          firstComponent={<Typography>Products</Typography>}
          secondComponent={
            <Button
              onClick={() => navigate("/product/create")}
              variant="contained"
              color="primary"
              startIcon={<Add color="white" variant="Outline" />}
            >
              Add New Product
            </Button>
          }
        />
      </Grid>
      {primaryWidgets.map((item) => (
        <Grid item lg={6} md={6} p={1}>
          {" "}
          <Widget
            icon={item.icon}
            containerSx={item.containerSx}
            items={item.items}
          />{" "}
        </Grid>
      ))}

      <Grid item lg={12} p={1}>
        {(isLoading || products?.data?.length < 1) && (
          <EmptyUI
            content="No Products Yet?"
            icon={<Bag2 size={32} color="black" />}
            secondaryContent={
              <>
                <Typography fontSize={14}>
                  Add products to your store and start selling to see orders
                  here.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Add color="white" variant="Outline" />}
                >
                  New Product
                </Button>
              </>
            }
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Index;
