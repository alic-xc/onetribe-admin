import { Stack, Typography } from "@mui/material";
import { Button, Modal } from "ontribe-admin-storybook";
import React from "react";

interface ActionPrompt {
  title?: "";
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
    <Stack direction="row">
      {" "}
      <Button
        onClick={() => {
          props?.onContinue;
          setIsModalOpen(false);
        }}
      >
        Continue
      </Button>{" "}
      <Button
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
          <Typography>{props.message}</Typography>
          {actionButtons}
        </Stack>
      }
      handleClose={() => setIsModalOpen(false)}
    />
  );
};

export default ActionPrompt;
