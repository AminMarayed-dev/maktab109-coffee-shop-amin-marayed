import { yellow } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
let theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: [
      "vazirmatn",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },

  palette: {
    primary: {
      main: "#fff",
      dark: "#EFEFEF85",
      light: "#6b7280",
      contrastText: "rgb(15,15,15)",
    },
    secondary: {
      main: "rgb(75, 54, 33)",
      dark: "rgb(65,42,34)",
      light: "rgb(211,169,127)",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "gray",
            },
            "&:hover fieldset": {
              borderColor: "darkgray",
            },
            "&.Mui-focused fieldset": {
              borderColor: "rgb(211,169,127)",
            },
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: "black",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(211,169,127)",
          color: "rgb(15,15,15)",
          borderRadius: "35px",
          "&:hover": {
            backgroundColor: "rgb(65,42,34)",
            color: "#fff",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "darkgray",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(211,169,127)",
          },
        },
        icon: {
          color: "rgb(15,15,15)",
        },
      },
    },
    // MuiRating: {
    //   styleOverrides: {
    //     iconFilled: {
    //       color: yellow[700],
    //     },
    //     iconHover: {
    //       color: yellow[800],
    //     },
    //   },
    // },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
