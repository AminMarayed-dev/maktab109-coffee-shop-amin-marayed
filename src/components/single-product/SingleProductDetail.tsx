import {
  Alert,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Rating,
  Snackbar,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";

import { localization } from "@/constant/localization";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import GridViewIcon from "@mui/icons-material/GridView";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { cssClass } from "@/constant/cssClass";
import useEditProduct from "@/hooks/dashboard/useEditProductById";
import useResponsive from "@/hooks/shared/useResponsive";
import truncateText from "@/utils/trancateText";
import { useCartStore } from "@/zustand/cart/store";
import useShopStore from "@/zustand/shop/store";
import { useRouter } from "next/router";
import { useState } from "react";
import CountBox from "../shared/CountBox";
import DialogAddProducts from "./DialogAddProducts";
import SocialMedia from "./SocialMedia";

const { common, singleProduct, shop, cart } = localization;
const { styleButtonLinkSingleProduct } = cssClass;
function SingleProductDetail({ product }: { product: any }) {
  const router = useRouter();
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const [open, setOpen] = useState(false);
  const [rateValue, setRateValue] = useState<number | null>(0);
  const productsCount = useCartStore((state) => state.productCounts);

  const addToCart = useCartStore((state) => state.addToCart);
  const handleOpenDialog = useShopStore((state) => state.handleOpenDialog);
  const carts = useCartStore((state) => state.cart);

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
  const handleRouteButtonLink = (route: string) => {
    router.push(route);
  };
  const { mutate: editProductByRate } = useEditProduct();

  const handleSetRateValue = (event, newValue) => {
    setRateValue(newValue);
    const formData = new FormData();
    formData.append("rating", JSON.stringify({ rate: 3, count: 0 }));

    editProductByRate({
      id: product?._id,
      productsData: formData,
    });
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
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Button
            sx={styleButtonLinkSingleProduct}
            onClick={() => handleRouteButtonLink("/shop")}
          >
            {shop.shopInternet}
          </Button>
          {">>"}
          <Button
            sx={styleButtonLinkSingleProduct}
            onClick={() =>
              handleRouteButtonLink(
                `/product-category/${product.category.slugname}`
              )
            }
          >
            {product.category.name}
          </Button>
          {">>"}
          <Button
            sx={styleButtonLinkSingleProduct}
            onClick={() =>
              handleRouteButtonLink(
                `/product-category/${product.category.slugname}/${product.subcategory.slugname}`
              )
            }
          >
            {product.subcategory.name}
          </Button>
          {">>"}
          <Typography variant={`${mdDown ? "body2" : "body1"}`}>
            {mdDown ? truncateText(product.name, 15) : product.name}
          </Typography>
        </Stack>
        <ListItemIcon
          sx={{
            display: "flex",
            // justifyContent: "space-center",
          }}
        >
          <IconButton>
            <KeyboardArrowRightIcon sx={{ cursor: "pointer" }} />
          </IconButton>

          <Tooltip title={"بازگشت به محصولات"}>
            <IconButton>
              <GridViewIcon sx={{ cursor: "pointer" }} />
            </IconButton>
          </Tooltip>
          <IconButton>
            <KeyboardArrowLeftIcon sx={{ cursor: "pointer" }} />
          </IconButton>
        </ListItemIcon>
      </Box>
      <Typography variant="h6">{product.name}</Typography>
      <Rating
        name="simple-controlled"
        value={rateValue}
        onChange={(event, newValue) => handleSetRateValue(event, newValue)}
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
