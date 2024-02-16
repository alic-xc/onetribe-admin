import { Drawer, Header, PageLayout } from "ontribe-admin-storybook";
import { MENU_ITEMS } from "../utils/constants";
import React from "react";

const Layout = () => {
  const [open] = React.useState(true);
  const header = <Header title="Dashboard" open={open} />;
  const drawer = <Drawer menuItems={MENU_ITEMS} isOpen={open} />;

  return <PageLayout header={header} sidebar={drawer} />;
};

export default Layout;
