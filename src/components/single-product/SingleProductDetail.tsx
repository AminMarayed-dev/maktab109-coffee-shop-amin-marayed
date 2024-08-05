import {
  Box,
  Button,
  Divider,
  ListItemIcon,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

import { localization } from "@/constant/localization";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import GridViewIcon from "@mui/icons-material/GridView";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { useCartStore } from "@/zustand/cart/store";
import useShopStore from "@/zustand/shop/store";
import CountBox from "../shared/CountBox";
import DialogAddProducts from "./DialogAddProducts";
import SocialMedia from "./SocialMedia";

const { common, singleProduct, shop } = localization;
function SingleProductDetail({ product }: { product: any }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const handleOpenDialog = useShopStore((state) => state.handleOpenDialog);

  return (
    <Stack rowGap={2} flexGrow={1.5}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" fontSize={12.5}>
          {`${shop.shopInternet} >> ${product.category.name} << ${product.subcategory.name} >> ${product.name}`}
        </Typography>
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <KeyboardArrowRightIcon sx={{ cursor: "pointer" }} />
          <GridViewIcon sx={{ cursor: "pointer" }} />
          <KeyboardArrowLeftIcon sx={{ cursor: "pointer" }} />
        </ListItemIcon>
      </Box>
      <Typography variant="h6">{product.name}</Typography>
      <Rating name="read-only" value={product.rating.rate} readOnly />
      <Typography variant="h6" color="secondary.dark">
        {toPersianNumbersWithComma(product.price)} {common.rial}
      </Typography>
      <Typography variant="body2" color="primary.light">
        {product.description}
      </Typography>
      <Stack direction="row" columnGap={3}>
        <CountBox product={product} />
        <Button
          variant="contained"
          onClick={() => {
            addToCart(product);
            handleOpenDialog();
          }}
        >
          {common.addProductToBasket}
        </Button>
      </Stack>
      <DialogAddProducts />
      <Divider />
      <Box>
        <Typography variant="body2">
          {singleProduct.productID}: {product._id}
        </Typography>
        <Typography variant="body2" mt={1.2}>
          {singleProduct.category} : {product.category.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2">{singleProduct.shared} :</Typography>
          <SocialMedia />
        </Box>
      </Box>
    </Stack>
  );
}

export default SingleProductDetail;
