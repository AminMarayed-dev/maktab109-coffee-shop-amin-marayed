import { localization } from "@/constant/localization";

const { dashboard, common } = localization;

export const tableHeadCells = [
  {
    name: dashboard.product,
    alignMobile: "center",
    alignDesktop: "left",
  },
  {
    name: common.price,
    alignMobile: "center",
    alignDesktop: "left",
  },
  {
    name: common.inventory,
    alignMobile: "left",
    alignDesktop: "center",
  },
];
