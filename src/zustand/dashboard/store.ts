import { localization } from "@/constant/localization";
import { create } from "zustand";

const { dashboard } = localization;

type State = {
  categoryID: string;
  description: string;
  subCategoryID: string;
  productID: string;
  subCategoryList: string[] | null;
  images: string[];
  openModalAdd: boolean;
  openModalEdit: boolean;
  step: number;
  selectedTab: string;
  openDialogDelete: boolean;
};

type Action = {
  setCategoryID: (categoryID: State["categoryID"]) => void;
  setSubCategoryID: (subCategoryID: State["subCategoryID"]) => void;
  setDescription: (description: State["description"]) => void;
  setOpenModalAdd: (openModalAdd: State["openModalAdd"]) => void;
  setImages: (images: State["images"]) => void;
  setStep: (step: State["step"]) => void;
  setSelectedTab: (selectedTab: State["selectedTab"]) => void;
  setSubCategoryList: (subCategoryList: State["subCategoryList"]) => void;
  setProductID: (productID: State["productID"]) => void;
  handleOpenModalAdd: () => void;
  handleCloseModal: () => void;
  handleOpenModalEdit: () => void;
  // handleCloseModalEdit: () => void;
  handleOpenDialogDelete: () => void;
  handleCloseDialogDelete: () => void;
  resetFieldsEdit: () => void;
};

const useDashboardStore = create<State & Action>((set) => ({
  categoryID: "",
  subCategoryID: "",
  productID: "",

  description: "",
  openModalEdit: false,
  openModalAdd: false,
  step: 0,
  selectedTab: dashboard.products,
  images: [],
  subCategoryList: [],
  openDialogDelete: false,

  setCategoryID: (categoryID) => set(() => ({ categoryID })),
  setSubCategoryID: (subCategoryID) => set(() => ({ subCategoryID })),
  setProductID: (productID) => set(() => ({ productID })),
  setDescription: (description) => set(() => ({ description })),
  setOpenModalAdd: (openModalAdd) => set(() => ({ openModalAdd })),
  setStep: (step) => set(() => ({ step })),
  setSelectedTab: (selectedTab) => set(() => ({ selectedTab })),
  setImages: (images) => set(() => ({ images })),
  setSubCategoryList: (subCategoryList) => set(() => ({ subCategoryList })),
  handleOpenModalAdd: () => set({ openModalAdd: true }),
  handleCloseModal: () => set({ openModalAdd: false, openModalEdit: false }),
  handleOpenDialogDelete: () => set({ openDialogDelete: true }),
  handleCloseDialogDelete: () => set({ openDialogDelete: false }),
  handleOpenModalEdit: () => set({ openModalEdit: true }),
  // handleCloseModalEdit: () => set({ openModalEdit: false }),
  resetFieldsEdit: () =>
    set({
      categoryID: "",
      subCategoryID: "",
      description: "",
      images: [],
    }),
}));

export default useDashboardStore;
