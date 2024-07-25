import { Button, CircularProgress } from "@mui/material";

function ButtonLoading({ loading, text, ...rest }) {
  return (
    <>
      {loading ? (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          {...rest}
        >
          <CircularProgress color="inherit" size={24} />
        </Button>
      ) : (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {text}
        </Button>
      )}
    </>
  );
}

export default ButtonLoading;
