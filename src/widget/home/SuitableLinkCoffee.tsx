import CapsulesImg from "@/assets/images/Capsules-coffee (1).webp";
import EspersoImg from "@/assets/images/Coffee-espresso (1).webp";
import FrenchImg from "@/assets/images/French-coffee (1).webp";
import FrenchPressImg from "@/assets/images/French-press-coffee (1).webp";
import InstantImg from "@/assets/images/Instant-coffee (1).webp";
import MokapatImg from "@/assets/images/Mokapot-coffee (1).webp";
import DamiImg from "@/assets/images/Pour-over-coffee (1).webp";
import TurkImg from "@/assets/images/Turkishcoffee (1).webp";
import LinkImages from "@/components/home/LinkImages";
import { localization } from "@/constant/localization";
import { Stack } from "@mui/material";

const { home } = localization;

const suitableListImage = [
  {
    name: "Turk",
    src: TurkImg,
    subSlug: "turk",
    slug: "marayed-coffees",
    aos: "right",
  },
  {
    name: "Esperso",
    src: EspersoImg,
    slug: "foreign-coffees",
    subSlug: "lavaza-coffee",
    aos: "down",
  },
  {
    name: "FrenchPress",
    src: FrenchPressImg,
    subSlug: "eli's-coffee",
    slug: "foreign-coffees",
    aos: "down",
  },
  {
    name: "Mokapat",
    src: MokapatImg,
    subSlug: "starbucks-coffee",
    slug: "foreign-coffees",
    aos: "left",
  },
  {
    name: "Dami",
    src: DamiImg,
    subSlug: "mazda-coffee",
    slug: "foreign-coffees",
    aos: "right",
  },
  {
    name: "French",
    src: FrenchImg,
    subSlug: "jacobs-coffee",
    slug: "instant-coffees",
    aos: "down",
  },
  {
    name: "Instant",
    src: InstantImg,
    subSlug: "jacobs-coffee",
    slug: "instant-coffees",
    aos: "down",
  },
  {
    name: "Capsules",
    src: CapsulesImg,
    subSlug: "jacobs-coffee",
    slug: "instant-coffees",
    aos: "left",
  },
];

function SuitableLinkCoffee() {
  return (
    <Stack mt={3}>
      <LinkImages title={home.typeCoffee} imageList={suitableListImage} />;
    </Stack>
  );
}

export default SuitableLinkCoffee;
