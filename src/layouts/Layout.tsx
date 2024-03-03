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
import { useGetAccessTokenMutation } from "../services/authenticationAPI";

interface AccessTokenResponse {
  status: string;
  message: string;
  data: {
    accessToken: string;
  };
}

const Layout = () => {
  const [accessToken, setAccessToken] = React.useState<string>("");
  const [requestAccessToken] = useGetAccessTokenMutation();
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [open] = React.useState(true);
  const location = useLocation();

  const getAccessTokenHandler = () => {
    const payload = {
      refreshToken: localStorage.getItem("refresh"),
    };
    const response = requestAccessToken(payload).unwrap();
    response.then((data: AccessTokenResponse) => {
      localStorage.setItem("access", data.data.accessToken);
      localStorage.setItem("timestamp", String(Date.now()));
      localStorage.setItem("expires", "300");
      setAccessToken(data.data.accessToken);
    });
    response.catch();
    response.finally();
  };

  React.useEffect(() => {
    const currentTimeStamp = Date.now();
    const initialTimeStamp = localStorage.getItem("timestamp");
    const totalSecondsLeft = currentTimeStamp - Number(initialTimeStamp);
    const totalSecondsExpiry = localStorage.getItem("expires");
    if (totalSecondsLeft >= Number(totalSecondsExpiry)) {
      getAccessTokenHandler();
    } else {
      const timeout = setTimeout(
        () => getAccessTokenHandler(),
        totalSecondsLeft
      );
      return () => clearTimeout(timeout);
    }
  }, [accessToken]);

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
