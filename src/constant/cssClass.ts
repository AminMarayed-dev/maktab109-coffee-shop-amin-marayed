export const cssClass = {
  center: { alignItems: "center", justifyContent: "center", display: "flex" },
  borderInput: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: "darkgray",
      },
      "&.Mui-focused fieldset": {
        borderColor: "secondary.light",
      },
    },
  },
  styleModal: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  onlyDesktop: {
    display: {
      md: "inline",
      xs: "none",
    },
  },
  onlyMobile: {
    display: {
      md: "none",
      xs: "inline ",
    },
  },
  styleContainerToobar: {
    display: "flex",
    justifyContent: "space-between",
    py: 2.5,
    alignItems: "center",
  },
  styleContainerAuth: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bgcolor: "primary.main",
    py: 3,
    borderRadius: 3,
  },
  styleSidbar: {
    "& .MuiDrawer-paper": {
      backgroundColor: "secondary.main",
      color: "primary.main",
    },
  },
  hoverButtonSidebar: {
    "&:hover": {
      backgroundColor: "#f0f0f0",
      color: "#000000",
      borderRadius: "8px",
    },
  },
};
