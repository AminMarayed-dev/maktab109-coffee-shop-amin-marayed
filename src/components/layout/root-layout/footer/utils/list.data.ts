import organization from "@/assets/images/enamad.webp";
import nationalUnion from "@/assets/images/logo-etehhhhhhhdie-min.webp";
import electronicTrust from "@/assets/images/logo-min.webp";
import { localization } from "@/constant/localization";

const {
  footerRoot,
  home: { menuList },
} = localization;

export const listItemsFooter = [
  {
    title: footerRoot.instantLink,
    body: [menuList.home, footerRoot.articleCoffee, footerRoot.brandCoffee],
    hasImage: false,
  },
  {
    title: footerRoot.accountUser,
    body: [
      footerRoot.panelUser,
      footerRoot.orderTracking,
      footerRoot.purchaseGuide,
    ],
    hasImage: false,
  },
  {
    title: footerRoot.hourWorkShop,
    body: [
      footerRoot.internet,
      footerRoot.thursday,
      footerRoot.branchValiaser2,
      footerRoot.tenToNight,
      footerRoot.branchBahar,
      footerRoot.eightToTen,
    ],
    hasImage: false,
  },

  {
    title: footerRoot.contactUs,
    body: [footerRoot.whatsApp, footerRoot.email, footerRoot.mobile],
    hasImage: false,
  },
  {
    title: footerRoot.nationalUnionSymbol,
    imageURL: nationalUnion,
    hasImage: true,
  },
  {
    title: footerRoot.electronicTrustSymbol,
    imageURL: electronicTrust,
    hasImage: true,
  },
  {
    title: footerRoot.organizationSymbol,
    imageURL: organization,
    hasImage: true,
  },

  {
    title: footerRoot.addressShop,
    body: [
      footerRoot.branchBahar,
      footerRoot.internetVahed,
      footerRoot.branchValiaser,
    ],
    hasImage: false,
  },
];
