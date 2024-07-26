import React from "react";
import { Divider, Typography, Box } from "@mui/material";

const TextDivider = ({ text }: { text: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Divider sx={{ flexGrow: 1 }} />
      <Typography
        sx={{
          margin: "0 16px",
          whiteSpace: "nowrap",
        }}
        color="primary.contrastText"
        variant="h5"
      >
        {text}
      </Typography>
      <Divider sx={{ flexGrow: 1 }} />
    </Box>
  );
};

export default TextDivider;
