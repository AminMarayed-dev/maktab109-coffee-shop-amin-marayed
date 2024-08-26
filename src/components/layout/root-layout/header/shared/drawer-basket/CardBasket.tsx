import DialogDeleteCart from "@/components/cart/DialogDeleteCart";
import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import truncateText from "@/utils/trancateText";
import { useCartStore } from "@/zustand/cart/store";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";

const { common } = localization;
function CardBasket({ card }: { card: any }) {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const handleOpenDialog = useCartStore((state) => state.handleOpenDialog);
  return (
    <>
      <Stack
        direction="row"
        columnGap={3}
        padding={3.2}
        sx={{
          cursor: "pointer",
          position: "relative",
          "&:hover": { bgcolor: "primary.dark" },
        }}
      >
        <Image
          width={50}
          height={50}
          // src={`http://${card.images[0]}`}
          src={card.images[0]}
          alt={card.name}
        />

        <Stack rowGap={1}>
          <Typography variant="body1">
            {mdDown ? truncateText(card.name, 20) : truncateText(card.name, 35)}
          </Typography>
          <Typography variant="body2">
            {toPersianNumbersWithComma(card.count)} ×{" "}
            {toPersianNumbersWithComma(card.price)} {common.rial}
          </Typography>
        </Stack>
        <IconButton
          sx={{
            position: "absolute",
            right: 2,
            top: 2,
          }}
          onClick={handleOpenDialog}
        >
          <CloseIcon fontSize="small" sx={{ fill: "#6b7280" }} />
        </IconButton>
        <DialogDeleteCart cartID={card._id} />
      </Stack>
      <Divider />
    </>
  );
}

export default CardBasket;
