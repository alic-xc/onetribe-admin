import React from "react";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import { Card, CustomTable, PageTitle, Widget } from "ontribe-admin-storybook";
import { Bag2, BoxAdd, Money } from "iconsax-react";
import { useGetCustomersQuery } from "../../services/userAPI";
import EmptyUI from "../../components/EmptyUI";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import formatDate from "../../utils/dateFormatter";

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

interface CustomersResponse {
  status: string;
  data: User[];
}
interface User {
  fashOrgOrders: any[]; // Replace `any[]` with the appropriate type if needed
  fashOrgWishlist: any[]; // Replace `any[]` with the appropriate type if needed
  _id: string;
  email: string;
  role: string;
  lastLogin: string;
  isBlocked: boolean;
  isDeleted: boolean;
  isVerified: boolean;
  oauthProviders: any[]; // Replace `any[]` with the appropriate type if needed
  profile: UserProfile;
  fashOrgCart: string;
  __v: number;
}

interface UserProfile {
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  image: string | null;
  fashOrgDefaultShippingAddress: string | null; // Assuming address can be null
  fashOrgDefaultBillingAddress: string | null; // Assuming address can be null
  fashOrgAddress: any[]; // Replace `any[]` with the appropriate type if needed
  __v: number;
}

const Index = () => {
  const { data, isLoading } = useGetCustomersQuery({});
  const customers: CustomersResponse = data;
  const containerSx: SxProps = { border: "none" };
  const primaryWidgets: Item[] = [
    {
      containerSx: containerSx,
      icon: <Money size="20" color="black" variant="Outline" />,
      items: [
        { title: "All Customers", value: "0", secondaryValue: "" },
        { title: "Active", value: "0", secondaryValue: "" },
        { title: "In-Active", value: "0", secondaryValue: "" },
      ],
    },
    {
      containerSx: containerSx,
      icon: <BoxAdd size="20" color="black" variant="Outline" />,
      items: [
        { title: "New Customers", value: "0", secondaryValue: "" },
        { title: "Purchasing ", value: "0", secondaryValue: "" },
        { title: "Abandoned Carts", value: "0", secondaryValue: "" },
      ],
    },
  ];
  const columns = [
    {
      Header: "Full Name",
      accessor: "fullName",
      className: "cell-center",
    },
    {
      Header: "Email",
      accessor: "email",
      className: "cell-center",
    },
    {
      Header: "Phone",
      accessor: "phone",
      className: "cell-center",
    },
    {
      Header: "Is Blocked",
      accessor: "isBlocked",
      className: "cell-center",
    },
    {
      Header: "Is Verified",
      accessor: "isVerified",
      className: "cell-center",
    },
    {
      Header: "Last Login",
      accessor: "lastLogin",
      className: "cell-center",
    },
    {
      Header: "Action",
      accessor: "action",
      className: "cell-center",
    },
  ];
  const rows = customers?.data?.map((item) => {
    return {
      fullName: `${item.profile.firstName} ${item.profile.lastName}`,
      email: item.email,
      phone: item.profile.phoneNumber,
      isBlocked: item.isBlocked ? "Yes" : "No",
      isVerified: item.isVerified ? "Yes" : "No",
      lastLogin: formatDate(item.lastLogin),
      action: (
        <Link to={`/customer/${item._id}`}>
          {" "}
          <IconButton>
            {" "}
            <AiFillEye size={16} />{" "}
          </IconButton>
        </Link>
      ),
    };
  });

  return (
    <Grid container my={5}>
      <Grid item lg={12} md={12} p={1}>
        <PageTitle firstComponent={<Typography>Customers</Typography>} />
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
        {(isLoading || customers?.data?.length < 1) && (
          <EmptyUI
            content="No Customer Yet?"
            icon={<Bag2 size={32} color="black" />}
            secondaryContent=""
          />
        )}
        {customers?.data?.length > 0 && (
          <Card
            cardSx={{
              minHeight: 500,
            }}
            content={
              <CustomTable
                columns={columns}
                data={rows || []}
                isDisabledSelection={false}
                isPagination={true}
                isSearch={true}
              />
            }
          ></Card>
        )}
      </Grid>
    </Grid>
  );
};

export default Index;
