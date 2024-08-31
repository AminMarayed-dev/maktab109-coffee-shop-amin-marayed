import LinkImages from "@/components/home/LinkImages";
import { localization } from "@/constant/localization";
import { Stack } from "@mui/material";

const typeListImage = {
  typeCoffee: [
    {
      name: "Arabica",
      src: "https://www.melocoffee.com/wp-content/uploads/2023/09/Blended-coffee.webp",
      subSlug: "arabica",
      slug: "marayed-coffees",
      aos: "right",
    },
    {
      name: "Mix",
      src: "https://www.melocoffee.com/wp-content/uploads/2023/09/Arabica-coffee.webp",
      subSlug: "mix",
      slug: "marayed-coffees",
      aos: "up",
    },
    {
      name: "Robusta",
      src: "https://www.melocoffee.com/wp-content/uploads/2023/09/Robusta-coffee.webp",
      subSlug: "robusta",
      slug: "marayed-coffees",
      aos: "up",
    },
    {
      name: "Full",
      src: "https://www.melocoffee.com/wp-content/uploads/2023/09/High-caffeine-coffee.webp",
      subSlug: "turk",
      slug: "marayed-coffees",
      aos: "left",
    },
  ],
  typeCoffeeMaker: [
    {
      name: "Travel",
      src: "https://www.melocoffee.com/wp-content/uploads/2023/09/Travel-coffee-maker.webp",
      subSlug: "travel",
      slug: "coffee-makers",
      aos: "right",
    },
    {
      name: "French",
      src: "https://www.melocoffee.com/wp-content/uploads/2023/09/French-press-coffee-maker.webp",
      subSlug: "french-press",
      slug: "coffee-makers",
      aos: "up",
    },
    {
      name: "Mokapat",
      src: "https://www.melocoffee.com/wp-content/uploads/2023/09/Mokapot-coffee-maker.webp",
      subSlug: "mokapat",
      slug: "coffee-makers",
      aos: "up",
    },
    {
      name: "Esperso",
      src: "https://www.melocoffee.com/wp-content/uploads/2023/09/Espresso-machine.webp",
      subSlug: "electric-espresso-machine",
      slug: "coffee-makers",
      aos: "left",
    },
  ],
};
const { home } = localization;
function TypeLinkCoffee() {
  const { typeCoffee, typeCoffeeMaker } = typeListImage;
  return (
    <Stack mt={4} rowGap={4}>
      <LinkImages title={home.typeCoffee} imageList={typeCoffee} />
      <LinkImages title={home.typeCoffeeMaker} imageList={typeCoffeeMaker} />
    </Stack>
  );
}

export default TypeLinkCoffee;
