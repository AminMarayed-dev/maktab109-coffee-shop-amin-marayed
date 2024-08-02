import TypeLinkCoffee from "@/widget/home/TypeLinkCoffee";
import { Container, Divider } from "@mui/material";
import ProductsCategory from "./ProductsCategory";
import Slider from "./Slider";
import { localization } from "@/constant/localization";
import SearchBox from "./SearchBox";
import DescriptionAccordion from "./DescriptionAccordion";

const { home } = localization;
function Home({ data }) {
  return (
    <Container>
      <SearchBox />
      <Slider />
      <TypeLinkCoffee />
      <ProductsCategory data={data} title={home.sampleOfProducts} />
      <Divider />
      <DescriptionAccordion />
    </Container>
  );
}

export default Home;
