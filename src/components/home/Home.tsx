import { localization } from "@/constant/localization";
import TypeLinkCoffee from "@/widget/home/TypeLinkCoffee";
import { Container, Divider } from "@mui/material";
import DescriptionAccordion from "./DescriptionAccordion";
import ProductsCategory from "./ProductsCategory";
import SearchBox from "./SearchBox";
import Slider from "./Slider";

const { home } = localization;
function Home({ data }: { data: any }) {
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
