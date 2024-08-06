import TimerIcon from "@mui/icons-material/Timer";
import { Box, Typography } from "@mui/material";
function Timer({ timeLeft }: { timeLeft: number }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 16,
        right: 16,
        display: "flex",
        alignItems: "center",
      }}
    >
      <TimerIcon sx={{ fill: "rgb(211,169,127)" }} />
      <Typography variant="body2" ml={1}>
        {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
      </Typography>
    </Box>
  );
}

export default Timer;
