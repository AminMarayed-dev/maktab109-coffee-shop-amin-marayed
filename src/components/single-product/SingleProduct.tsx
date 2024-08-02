import { cssClass } from "@/constant/cssClass";
import useResponsive from "@/hooks/shared/useResponsive";
import { Container, Divider, Stack } from "@mui/material";
import ProductsRelated from "./ProductsRelated";
import SingleProductDetail from "./SingleProductDetail";
import SingleProductImages from "./SingleProductImages";

const { center } = cssClass;
function SingleProduct({ product }: { product: any }) {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  return (
    <Container>
      <Stack
        direction={mdDown ? "column-reverse" : "row-reverse"}
        // alignItems="center"
        gap={4}
        mb={2}
        justifyContent={mdDown ? "center" : "space-between"}
      >
        <SingleProductDetail product={product} />
        <SingleProductImages product={product} />
      </Stack>
      <Divider />
      <ProductsRelated product={product} />
    </Container>
  );
}

export default SingleProduct;
