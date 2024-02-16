import { Category, Profile2User, Box, Setting2 } from "iconsax-react";

export const MENU_ITEMS = [
  {
    icon: <Category size="24" />,
    title: "Dashboard",
    isActive: true,
    link: "/dashboard",
  },
  {
    icon: <Box size="24" />,
    title: "Orders",
    isActive: true,
    link: "/orders",
  },
  {
    icon: <Category size="24" />,
    title: "Products",
    isActive: true,
    link: "/products",
  },
  {
    icon: <Profile2User size="24" />,
    title: "Customers",
    isActive: true,
    link: "/customers",
  },
  {
    icon: <Category size="24" />,
    title: "Category",
    isActive: true,
    link: "/category",
  },
  {
    icon: <Setting2 size="24" />,
    title: "Settings",
    isActive: true,
    link: "/settings",
  },
];
