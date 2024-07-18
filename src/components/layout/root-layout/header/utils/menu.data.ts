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
    ],
    isChevron: true,
  },
  {
    category: menuList.foreignCoffee,
    items: [
      { text: menuList.arabicaCoffee },
      { text: menuList.robustaCoffee },
      { text: menuList.turkCoffee },
    ],
    isChevron: true,
  },
  {
    category: menuList.InstantCoffee,
    items: [
      { text: menuList.arabicaCoffee },
      { text: menuList.robustaCoffee },
      { text: menuList.turkCoffee },
    ],
    isChevron: true,
  },
  {
    category: menuList.accessories,
    items: [
      { text: menuList.arabicaCoffee },
      { text: menuList.robustaCoffee },
      { text: menuList.turkCoffee },
    ],
    isChevron: true,
  },
  {
    category: menuList.coffeeMakers,
    items: [
      { text: menuList.arabicaCoffee },
      { text: menuList.robustaCoffee },
      { text: menuList.turkCoffee },
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
