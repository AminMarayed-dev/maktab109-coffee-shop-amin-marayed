import LinkImages from "@/components/home/LinkImages";
import { localization } from "@/constant/localization";
import { Stack } from "@mui/material";

const typeListImage = {
  typeCoffee: [
    {
      name: "Arabica",
      src: "https://www.melocoffee.com/wp-content/uploads/2023/09/Blended-coffee.webp",
    },
    {
      name: "Mix",
      src: "https://www.melocoffee.com/wp-content/uploads/2023/09/Arabica-coffee.webp",
    },
    {
      name: "Robusta",
      src: "https://www.melocoffee.com/wp-content/uploads/2023/09/Robusta-coffee.webp",
    },
    {
      name: "Full",
      src: "https://www.melocoffee.com/wp-content/uploads/2023/09/High-caffeine-coffee.webp",
    },
  ],
  typeCoffeeMaker: [
    {
      name: "Travel",
      src: "https://www.melocoffee.com/wp-content/uploads/2023/09/Travel-coffee-maker.webp",
    },
    {
      name: "French",
      src: "https://www.melocoffee.com/wp-content/uploads/2023/09/French-press-coffee-maker.webp",
    },
    {
      name: "Mokapat",
      src: "https://www.melocoffee.com/wp-content/uploads/2023/09/Mokapot-coffee-maker.webp",
    },
    {
      name: "Esperso",
      src: "https://www.melocoffee.com/wp-content/uploads/2023/09/Espresso-machine.webp",
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
