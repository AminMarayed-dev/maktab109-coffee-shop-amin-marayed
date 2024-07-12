import { Button, CircularProgress } from "@mui/material";

function ButtonAuth({ loading, text }) {
  return (
    <>
      {loading ? (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
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

export default ButtonAuth;
