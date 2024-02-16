import React from "react";
import { Box, Grid, Stack, SxProps, Typography } from "@mui/material";
import {
  Button,
  PageTitle,
  Widget,
} from "ontribe-admin-storybook";
import {
  Add,
  Bag2,
  BoxAdd,
  Money,
  ShoppingCart,
} from "iconsax-react";

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

const Index = () => {
  const containerSx: SxProps = { border: "none" };
  const primaryWidgets: Item[] = [
    {
      containerSx: containerSx,
      icon: <Money size="20" color="black" variant="Outline" />,
      items: [
        { title: "All Orders", value: "0", secondaryValue: "" },
        { title: "Pending", value: "0", secondaryValue: "" },
        { title: "Completed", value: "0", secondaryValue: "" },
      ],
    },
    {
      containerSx: containerSx,
      icon: <BoxAdd size="20" color="black" variant="Outline" />,
      items: [
        { title: "Canceled", value: "0", secondaryValue: "" },
        { title: "Returned", value: "0", secondaryValue: "" },
        { title: "Damaged", value: "0", secondaryValue: "" },
      ],
    },
    {
      containerSx: containerSx,
      icon: <ShoppingCart size="20" color="black" variant="Outline" />,
      items: [
        { title: "Abandoned Cart", value: "0", secondaryValue: "" },
        { title: "Customers", value: "0", secondaryValue: "" },
      ],
    },
  ];

  return (
    <Grid container my={5}>
      <Grid item lg={12} md={12} p={1}>
        <PageTitle
          firstComponent={<Typography>Order Summary</Typography>}
          secondComponent={
            <Button
              variant="contained"
              color="primary"
              startIcon={<Add color="white" variant="Outline" />}
            >
              Add a New Product
            </Button>
          }
        />
      </Grid>
      {primaryWidgets.map((item) => (
        <Grid item lg={4} md={4} p={1}>
          {" "}
          <Widget
            icon={item.icon}
            containerSx={item.containerSx}
            items={item.items}
          />{" "}
        </Grid>
      ))}

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
              No Orders Yet?
            </Typography>
            <Typography fontSize={14}>
              Add products to your store and start selling to see orders here.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Add color="white" variant="Outline" />}
            >
              New Product
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Index;
