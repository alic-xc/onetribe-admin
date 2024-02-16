import React from "react";
import { Box, Grid, Stack, SxProps, Typography } from "@mui/material";
import { Button, PageTitle, Widget } from "ontribe-admin-storybook";
import { Add, Bag2, BoxAdd, Money } from "iconsax-react";
import { useNavigate } from "react-router-dom";

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
              No Product Yet?
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
