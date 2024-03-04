import { Stack, Typography } from "@mui/material";
import { Button, Modal } from "ontribe-admin-storybook";
import React from "react";

interface ActionPrompt {
  title?: string;
  message: string;
  isOpen: boolean;
  onContinue?: () => void;
}

const ActionPrompt = (props: ActionPrompt) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(props.isOpen);
  React.useEffect(() => {
    setIsModalOpen(props.isOpen);
  }, [props.isOpen]);

  const actionButtons = (
    <Stack direction="row" flex={1} gap={2}>
      {" "}
      <Button
        variant="contained"
        sx={{ p: 1, width: "50%" }}
        onClick={() => {
          props?.onContinue && props?.onContinue();
          setIsModalOpen(false);
        }}
      >
        Continue
      </Button>{" "}
      <Button
        variant="contained"
        color="error"
        sx={{ p: 1, width: "50%" }}
        onClick={() => {
          setIsModalOpen(false);
        }}
      >
        Cancel
      </Button>{" "}
    </Stack>
  );
  return (
    <Modal
      title={<Typography>{props.title}</Typography>}
      open={isModalOpen}
      size="xs"
      content={
        <Stack>
          <Typography mb={3}>{props.message}</Typography>
          {actionButtons}
        </Stack>
      }
      handleClose={() => setIsModalOpen(false)}
    />
  );
};

export default ActionPrompt;
