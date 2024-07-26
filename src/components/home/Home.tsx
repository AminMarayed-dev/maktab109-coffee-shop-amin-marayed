import TypeLinkCoffee from "@/widget/home/TypeLinkCoffee";
import { Container } from "@mui/material";
import ProductsCategory from "./ProductsCategory";
import Slider from "./Slider";
import { localization } from "@/constant/localization";

const { home } = localization;
function Home({ data }) {
  return (
    <Container>
      <Slider />
      <TypeLinkCoffee />
      <ProductsCategory data={data} title={home.sampleOfProducts} />
    </Container>
  );
}

export default Home;
