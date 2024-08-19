import {
  Alert,
  Box,
  Button,
  Divider,
  ListItemIcon,
  Rating,
  Snackbar,
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
import { useState } from "react";
import CountBox from "../shared/CountBox";
import DialogAddProducts from "./DialogAddProducts";
import SocialMedia from "./SocialMedia";

const { common, singleProduct, shop, cart } = localization;
function SingleProductDetail({ product }: { product: any }) {
  const [open, setOpen] = useState(false);
  const [valueRating, setValueRating] = useState<null | number>(0);
  const productsCount = useCartStore((state) => state.productCounts);

  const addToCart = useCartStore((state) => state.addToCart);
  const handleOpenDialog = useShopStore((state) => state.handleOpenDialog);
  const carts = useCartStore((state) => state.cart);
  const [total, setTotal] = useState([productsCount[product?._id] || 1]);

  const handleAddToCart = () => {
    const cartItem = carts.find((item) => item._id === product._id);
    if (
      (cartItem?.count || 0) + (productsCount[product?._id] || 1) <=
      product?.quantity
    ) {
      addToCart(product);
      handleOpenDialog();
    } else {
      setOpen(true);
    }
  };

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
      <Rating
        name="read-only"
        value={valueRating}
        onChange={(event, newValue) => {
          setValueRating(newValue);
        }}
        color="secondary.main"
      />
      <Typography variant="h6" color="secondary.dark">
        {toPersianNumbersWithComma(product.price)} {common.rial}
      </Typography>
      <Typography variant="body2" color="primary.light">
        {product.description}
      </Typography>
      {product.quantity > 0 ? (
        <Stack direction="row" columnGap={3}>
          <CountBox product={product} />
          <Button variant="contained" onClick={handleAddToCart}>
            {common.addProductToBasket}
          </Button>
          <Snackbar
            open={open}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={3000}
            onClose={() => setOpen(false)}
          >
            <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
              {cart.messageGratherQuantity}{" "}
              {`مقدار موجودی: ${product.quantity}`}
            </Alert>
          </Snackbar>
        </Stack>
      ) : (
        <Typography variant="h5" color="error">
          {shop.unavailable}
        </Typography>
      )}

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
