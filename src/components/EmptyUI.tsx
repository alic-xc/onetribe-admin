import { Box, Stack, Typography } from "@mui/material";
import { Bag2 } from "iconsax-react";
import React from "react";

interface EmptyUIProps {
  icon?: React.ReactNode;
  content: string | React.ReactNode;
  secondaryContent?: string | React.ReactNode;
  
}
const EmptyUI = (props: EmptyUIProps) => {
  return (
    <Stack
      width="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
      height={600}
      bgcolor="white"
    >
      <Stack width="200px" direction="column" alignItems="center" spacing={2}>
        <Box>
            {props.icon}
        </Box>
        <Typography fontSize={20} fontWeight={500}>
          {props.content}
        </Typography>
        {props.secondaryContent}
      </Stack>
    </Stack>
  );
};

export default EmptyUI;
