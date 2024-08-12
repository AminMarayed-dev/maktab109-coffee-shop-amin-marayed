import { whitespace } from "stylis";

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
    // width: 800,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
    overflowY: "auto",
    maxHeight: 625,
    "&::-webkit-scrollbar": {
      display: "none",
    },
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
    // py: 2.5,
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
  styleButtonLink: {
    backgroundColor: "primary.main",
    color: "white",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "primary.main",
    },
    width: "100%",
    padding: 0,
  },
  styleDrawerBasket: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  styleCard: {
    alignItems: "center",
    // justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #52525b",
    height: "405px",
  },
  styleButtonResultPayment: {
    pay: {
      backgroundColor: "green",
      color: "white",
      "&:hover": { backgroundColor: "darkgreen" },
    },
    cancel: {
      backgroundColor: "red",
      color: "white",
      "&:hover": { backgroundColor: "darkred" },
    },
  },
  styleCardResultPayment: {
    display: "flex",
    flexDirection: "column",
    padding: 1.5,
    alignItems: "center",
    border: "3px solid #52525b",
  },
  styleButtonLinkSingleProduct: {
    backgroundColor: "primary.main",
    color: "primary.contrastText",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "primary.main",
      color: "secondary.light",
    },
    padding: 0,
    fontSize: "0.7rem",
    minWidth: 0,
  },
};
