import { localization } from "@/constant/localization";

const { dashboard } = localization;
export const tableHeadCells = [
  {
    name: dashboard.picture,
    align: "center",
  },
  {
    name: dashboard.nameProduct,
    align: "center",
  },
  {
    name: dashboard.category,
    align: "center",
    hasSX: true,
  },
  {
    name: dashboard.subCategory,
    align: "center",
  },
  {
    name: dashboard.actions,
    align: "center",
  },
];
