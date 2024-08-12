import ProductsRelated from "@/components/single-product/ProductsRelated";
import SingleProductDetail from "@/components/single-product/SingleProductDetail";
import SingleProductImages from "@/components/single-product/SingleProductImages";
import useResponsive from "@/hooks/shared/useResponsive";
import { Container, Divider, Stack } from "@mui/material";

function SingleProduct({ product }: { product: any }) {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  return (
    <Container>
      <Stack
        direction={mdDown ? "column-reverse" : "row-reverse"}
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
