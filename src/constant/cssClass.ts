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
};
