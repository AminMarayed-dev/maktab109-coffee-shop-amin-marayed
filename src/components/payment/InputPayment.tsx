import { Box, TextField, Typography } from "@mui/material";

interface InputPaymentProps {
  label: string;
  value?: string | number;
  disabled?: boolean;
  placeholder?: string;
  // Add other props you might be spreading
}

function InputPayment({
  label,
  value,
  disabled = false,
  ...rest
}: InputPaymentProps) {
  return (
    <Box width="100%">
      <Typography variant="body1" mb={1}>
        {label}
      </Typography>
      <TextField fullWidth disabled={disabled} value={value} {...rest} />
    </Box>
  );
}

export default InputPayment;
