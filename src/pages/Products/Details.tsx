import React from "react";
import {
  Box,
  Grid,
  GridProps,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import {
  Button,
  PageTitle,
  ProfileWidget,
  Widget,
} from "ontribe-admin-storybook";
import { Add, Bag2, Box1, BoxAdd, Card, Location } from "iconsax-react";
import ActionPrompt from "../../components/ActionPrompt";

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
  const [isUnpublish, setIsUnpublish] = React.useState(false);
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
          <Typography fontSize={14}>Last Published</Typography>
          <Typography fontSize={12}>Customer since 12 sept 2023</Typography>
        </Stack>
      ),
      items: [
        { title: "Price", value: "" },
        { title: "In-Stock", value: "20" },
      ],
    },
    {
      containerSx: containerSx,
      gridStyles: {
        lg: 3,
        md: 3,
      },
      icon: <Location size="20" color="black" variant="Outline" />,
      items: [
        {
          title: "Total Order",
          value: "N500,000",
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
        { title: "Views", value: "1200" },
        {
          title: "Favorite",
          value: "20",
        },
      ],
    },
  ];

  const secondaryWidgets: Item[] = [
    {
      containerSx: containerSx,
      icon: <Box1 size="20" color="black" variant="Outline" />,
      items: [
        { title: "All Orders", value: "0", secondaryValue: "" },
        { title: "Active", value: "0", secondaryValue: "" },
        { title: "In-Active", value: "0", secondaryValue: "" },
      ],
    },
    {
      containerSx: containerSx,
      icon: <BoxAdd size="20" color="black" variant="Outline" />,
      items: [
        { title: "Cancelled", value: "0", secondaryValue: "" },
        { title: "Returned", value: "0", secondaryValue: "" },
        { title: "Damaged", value: "0", secondaryValue: "" },
      ],
    },
  ];

  const title = (
    <Stack direction="row" justifyContent="flex-start" spacing={3}>
      <Typography fontSize={16} fontWeight={500}>
        Product Name
      </Typography>
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
          Product URL
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
        Edit Product
      </Button>
      <Button
        onClick={() => setIsUnpublish((prevState) => !prevState)}
        variant="contained"
        color="error"
        sx={{ py: 0.7, px: 3 }}
      >
        Unpublish Product
      </Button>
      <ActionPrompt
        message="Are you sure you want to continue"
        isOpen={isUnpublish}
      />
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

      {secondaryWidgets.map((item) => (
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
