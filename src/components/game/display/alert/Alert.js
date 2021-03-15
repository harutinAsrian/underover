import React from "react";
import { Alert } from "@material-ui/lab";
import { useSelector } from "react-redux";

export default function AlertComponent() {
  const { roundResult } = useSelector((state) => state.user);

  return (
    <Alert
      severity={roundResult ? "success" : "error"}
      variant="filled"
      icon={false}
      style={{ maxHeight: 44 }}
    >
      {roundResult ? "YOU WIN !!!" : "LOOSER !"}
    </Alert>
  );
}
