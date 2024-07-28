import { localization } from "@/constant/localization";
import PersonIcon from "@mui/icons-material/Person";

const {
  home: { menuList },
} = localization;

const menuItems = [
  {
    category: menuList.home,
    items: [],
    isChevron: false,
  },
  {
    category: menuList.marayedCoffee,
    items: [
      { text: menuList.arabicaCoffee, slug: "arabica" },
      { text: menuList.robustaCoffee, slug: "robusta" },
      { text: menuList.turkCoffee, slug: "turk" },
      { text: menuList.mixCoffee, slug: "mix" },
    ],
    isChevron: true,
    slug: "marayed-coffees",
  },
  {
    category: menuList.foreignCoffee,
    items: [
      { text: menuList.lavazaCoffee, slug: "lavaza-coffee" },
      { text: menuList.eliCoffee, slug: "eli's-coffee" },
      { text: menuList.starbucksCoffee, slug: "starbucks-coffee" },
      { text: menuList.mazdaCoffee, slug: "mazda-coffee" },
    ],
    isChevron: true,
    slug: "foreign-coffees",
  },
  {
    category: menuList.InstantCoffee,
    items: [
      { text: menuList.jacobsCoffee, slug: "jacobs-coffee" },
      { text: menuList.davidovCoffee, slug: "davidov-coffee" },
      { text: menuList.NestléCoffee, slug: "nestle-coffee" },
    ],
    isChevron: true,
    slug: "instant-coffees",
  },
  {
    category: menuList.accessories,
    items: [
      { text: menuList.filterCoffee, slug: "filter-coffee" },
      { text: menuList.grinderCoffee, slug: "grinder-coffee" },
    ],
    isChevron: true,
    slug: "accessories",
  },
  {
    category: menuList.coffeeMakers,
    items: [
      { text: menuList.mokapat, slug: "mokapat" },
      { text: menuList.frenchPress, slug: "french-press" },
      {
        text: menuList.electricEspressoMachine,
        slug: "electric-espresso-machine",
      },
    ],
    isChevron: true,
    slug: "coffee-makers",
  },
  {
    category: menuList.loginOrSignUp,
    items: [],
    isChevron: false,
    icon: PersonIcon,
  },
];

export default menuItems;
