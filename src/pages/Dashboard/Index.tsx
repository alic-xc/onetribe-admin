import React from "react";
import { Grid, Stack, SxProps, Typography } from "@mui/material";
import { Card, ListItem, Widget } from "ontribe-admin-storybook";
import { BoxAdd, Folder, Money, ShoppingCart, UserTick } from "iconsax-react";

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
        { title: "Total Sales", value: "0", secondaryValue: "0" },
        { title: "volume", value: "0", secondaryValue: "" },
      ],
    },
    {
      containerSx: containerSx,
      icon: <BoxAdd size="20" color="black" variant="Outline" />,
      items: [
        { title: "Orders", value: "0", secondaryValue: "" },
        { title: "Active", value: "0", secondaryValue: "" },
      ],
    },
    {
      containerSx: containerSx,
      icon: <ShoppingCart size="20" color="black" variant="Outline" />,
      items: [
        { title: "All Orders", value: "0", secondaryValue: "" },
        { title: "Pending", value: "0", secondaryValue: "" },
        { title: "Completed", value: "0", secondaryValue: "" },
      ],
    },
  ];

  const secondWidgets: Item[] = [
    {
      containerSx: containerSx,
      icon: <UserTick size="20" color="black" variant="Outline" />,
      items: [
        { title: "New Customers", value: "0", secondaryValue: "" },
        { title: "Customers", value: "0", secondaryValue: "" },
      ],
    },
    {
      containerSx: { ...containerSx, backgroundColor: "black", color: "white" },
      icon: <Folder size="20" color="white" variant="Outline" />,
      items: [
        { title: "All Products", value: "0", secondaryValue: "" },
        { title: "Active", value: "0", secondaryValue: "" },
      ],
    },
  ];

  const recentOrders = [
    {
      name: "Whire Shirt",
      date: "12 Sept 2021",
      price: "N200,000,000",
      status: "success",
      image: "",
    },
    {
      name: "Whire Shirt",
      date: "12 Sept 2021",
      price: "N200,000,000",
      status: "success",
      image: "",
    },
    {
      name: "Whire Shirt",
      date: "12 Sept 2021",
      price: "N200,000,000",
      status: "success",
      image: "",
    },
    {
      name: "Whire Shirt",
      date: "12 Sept 2021",
      price: "N200,000,000",
      status: "success",
      image: "",
    },
    {
      name: "Whire Shirt",
      date: "12 Sept 2021",
      price: "N200,000,000",
      status: "success",
      image: "",
    },
    {
      name: "Whire Shirt",
      date: "12 Sept 2021",
      price: "N200,000,000",
      status: "success",
      image: "",
    },
    {
      name: "Whire Shirt",
      date: "12 Sept 2021",
      price: "N200,000,000",
      status: "success",
      image: "",
    },
    {
      name: "Whire Shirt",
      date: "12 Sept 2021",
      price: "N200,000,000",
      status: "success",
      image: "",
    },
    {
      name: "Whire Shirt",
      date: "12 Sept 2021",
      price: "N200,000,000",
      status: "success",
      image: "",
    },
    {
      name: "Whire Shirt",
      date: "12 Sept 2021",
      price: "N200,000,000",
      status: "success",
      image: "",
    },
    {
      name: "Whire Shirt",
      date: "12 Sept 2021",
      price: "N200,000,000",
      status: "success",
      image: "",
    },
    {
      name: "Whire Shirt",
      date: "12 Sept 2021",
      price: "N200,000,000",
      status: "success",
      image: "",
    },
  ];

  return (
    <Grid container my={5}>
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
      <Grid item lg={8} md={8}>
        <Grid container>
          <Grid item lg={6} md={6} p={1}>
            <Card
              title={
                <Typography fontWeight={500} fontSize={16}>
                  Marketing
                </Typography>
              }
              headerSx={{ py: 1, pb: 2 }}
              contentSx={{ height: 265, overflow: "scroll" }}
            />
          </Grid>
          <Grid item lg={6} md={6} p={1}>
            <Stack direction="column" gap={2}>
              {secondWidgets.map((item) => (
                <Widget
                  icon={item.icon}
                  containerSx={item.containerSx}
                  items={item.items}
                />
              ))}
            </Stack>
          </Grid>
          <Grid item lg={12} md={12}>
            <Card
              title={
                <Typography fontWeight={500} fontSize={16}>
                  Summary
                </Typography>
              }
              headerSx={{ py: 1, pb: 2 }}
              contentSx={{ height: 320, overflow: "scroll" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={4} md={4} p={1}>
        <Card
          title={
            <Typography fontWeight={500} fontSize={16}>
              Recent Orders
            </Typography>
          }
          headerSx={{ py: 1, pb: 2 }}
          contentSx={{ maxHeight: 700, overflow: "scroll" }}
          content={
            <Stack>
              {recentOrders.map((item) => (
                <ListItem {...item} />
              ))}
            </Stack>
          }
        />
      </Grid>
    </Grid>
  );
};

export default Index;
