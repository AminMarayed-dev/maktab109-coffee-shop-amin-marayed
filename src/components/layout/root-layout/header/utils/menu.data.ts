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
      { text: menuList.arabicaCoffee },
      { text: menuList.robustaCoffee },
      { text: menuList.turkCoffee },
      { text: menuList.mixCoffee },
    ],
    isChevron: true,
  },
  {
    category: menuList.foreignCoffee,
    items: [
      { text: menuList.lavazaCoffee },
      { text: menuList.eliCoffee },
      { text: menuList.starbucksCoffee },
      { text: menuList.mazdaCoffee },
    ],
    isChevron: true,
  },
  {
    category: menuList.InstantCoffee,
    items: [
      { text: menuList.jacobsCoffee },
      { text: menuList.davidovCoffee },
      { text: menuList.NestléCoffee },
    ],
    isChevron: true,
  },
  {
    category: menuList.accessories,
    items: [{ text: menuList.filterCoffee }, { text: menuList.grinderCoffee }],
    isChevron: true,
  },
  {
    category: menuList.coffeeMakers,
    items: [
      { text: menuList.mokapat },
      { text: menuList.frenchPress },
      { text: menuList.electricEspressoMachine },
    ],
    isChevron: true,
  },
  {
    category: menuList.loginOrSignUp,
    items: [],
    isChevron: false,
    icon: PersonIcon,
  },
];

export default menuItems;
