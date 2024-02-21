import {
  Button,
  Drawer,
  Header,
  PageLayout,
  Modal,
} from "ontribe-admin-storybook";
import { MENU_ITEMS } from "../utils/constants";
import React from "react";
import { Typography } from "@mui/material";
import { ArrowDown2 } from "iconsax-react";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [open] = React.useState(true);
  const location = useLocation();
  const Btn = (
    <Button
      sx={{
        textTransform: "capitalize",
        border: 0,
        backgroundColor: "secondary.main",
        p: 0,
        px: "16px !important",
        py: "8px !important",
        m: 0,
        display: "flex",
        flexDirection: "row",
        gap: 2,
      }}
      onClick={() => setIsModalOpen((prevState) => !prevState)}
    >
      <Typography fontSize={12} color="black">
        TribeOnes
      </Typography>{" "}
      <ArrowDown2 size="20" color="black" />{" "}
    </Button>
  );
  const urlName = location.pathname.split("/");
  const header = (
    <Header title={String(urlName[1])} open={open} customBtn={Btn} />
  );
  const drawer = <Drawer menuItems={MENU_ITEMS} isOpen={open} />;

  return (
    <>
      <PageLayout header={header} sidebar={drawer} />
      <Modal
        title={<Typography>Change Store</Typography>}
        open={isModalOpen}
        size="xs"
        handleClose={() => setIsModalOpen(false)}
      />{" "}
    </>
  );
};

export default Layout;
