import React from "react";
import {
  Box,
  Grid,
  GridProps,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import { Button, PageTitle, ProfileWidget } from "ontribe-admin-storybook";
import { Add, Bag2, BagCross1, BoxAdd, Card, Location } from "iconsax-react";

interface Item {
  containerSx: SxProps;
  icon: React.ReactNode;
  items: Items[];
  text?: React.ReactNode;
  gridStyles?: GridProps;
}

type Items = {
  title: string;
  value: string;
  secondaryValue?: string;
};

const Details = () => {
  const containerSx: SxProps = { border: "none" };

  const primaryWidgets: Item[] = [
    {
      containerSx: containerSx,
      gridStyles: {
        lg: 4,
        md: 4,
      },
      icon: <BoxAdd size="20" color="black" variant="Outline" />,
      text: (
        <Stack>
          <Typography fontSize={14}>Janet Adebayo</Typography>
          <Typography fontSize={12}>Customer since 12 sept 2023</Typography>
        </Stack>
      ),
      items: [
        { title: "Phone", value: "+234902343422" },
        { title: "Email", value: "user@gmail.com" },
      ],
    },
    {
      containerSx: containerSx,
      gridStyles: {
        lg: 5,
        md: 5,
      },
      icon: <Location size="20" color="black" variant="Outline" />,
      items: [
        {
          title: "Home Address",
          value: "No. 15 Adekunle Street, Yaba, Lagos State",
          secondaryValue: "",
        },
        {
          title: "Biling Address",
          value: "No. 15 Adekunle Street, Yaba, Lagos State",
          secondaryValue: "",
        },
      ],
    },
    {
      containerSx: containerSx,
      gridStyles: {
        lg: 3,
        md: 3,
      },
      icon: <Card size="20" color="black" variant="Outline" />,
      items: [
        { title: "Payment Method", value: "Mastercard", secondaryValue: "" },
        {
          title: "Delivery Method",
          value: "Home Delivery",
          secondaryValue: "",
        },
      ],
    },
  ];

  const title = (
    <Stack direction="row" justifyContent="flex-start" spacing={3}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography fontSize={16} fontWeight={500}>
          Order Number
        </Typography>
        <Typography>#743648</Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography fontSize={16} fontWeight={500}>
          Order Date
        </Typography>
        <Typography>20 May 2023 - 12:55 pm</Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography fontSize={16} fontWeight={500}>
          Tracking ID
        </Typography>
        <Typography>9348fjr73</Typography>{" "}
      </Stack>
    </Stack>
  );

  const actions = (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
    >
      <Button
        variant="contained"
        color="primary"
        sx={{ py: 0.5, px: 3 }}
        startIcon={<Add color="white" variant="Outline" />}
      >
        Mark as complete
      </Button>
      <Button variant="contained" color="error" sx={{ py: 0.7, px: 3 }}>
        Cancel Order
      </Button>
    </Stack>
  );

  return (
    <Grid container my={5}>
      <Grid item lg={12} md={12} p={1}>
        <PageTitle firstComponent={title} secondComponent={actions} />
      </Grid>
      {primaryWidgets.map((item) => (
        <Grid item {...item.gridStyles} p={1}>
          {" "}
          <ProfileWidget
            icon={item.icon}
            containerSx={item.containerSx}
            items={item.items}
            text={item?.text}
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

export default Details;
