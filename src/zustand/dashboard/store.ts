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
  openModalOrder: boolean;
  step: number;
  selectedTab: string;
  openDialogDelete: boolean;
  isEdit: boolean;
  isUpload: boolean;
  orderID: string;
  delivaryStatus: string;
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
  setOrderID: (orderID: State["orderID"]) => void;
  setDelivaryStatus: (delivaryStatus: State["delivaryStatus"]) => void;
  handleOpenModalAdd: () => void;
  handleCloseModal: () => void;
  handleOpenModalEdit: () => void;
  handleOpenModalOrder: () => void;
  handleOpenDialogDelete: () => void;
  handleCloseDialogDelete: () => void;
  resetFieldsEdit: () => void;
  setIsEdit: (isEdit: State["isEdit"]) => void;
  setIsUpload: (isEdit: State["isUpload"]) => void;
  removeImage: (imageName: string) => void;
};

const useDashboardStore = create<State & Action>((set) => ({
  categoryID: "",
  subCategoryID: "",
  productID: "",
  orderID: "",
  delivaryStatus: "false",

  description: "",
  openModalEdit: false,
  openModalAdd: false,
  openModalOrder: false,
  step: 0,
  selectedTab: dashboard.products,
  images: [],
  subCategoryList: [],
  openDialogDelete: false,
  isEdit: false,
  isUpload: false,

  setCategoryID: (categoryID) => set(() => ({ categoryID })),
  setSubCategoryID: (subCategoryID) => set(() => ({ subCategoryID })),
  setProductID: (productID) => set(() => ({ productID })),
  setOrderID: (orderID) => set(() => ({ orderID })),
  setDelivaryStatus: (delivaryStatus) => set(() => ({ delivaryStatus })),
  setDescription: (description) => set(() => ({ description })),
  setOpenModalAdd: (openModalAdd) => set(() => ({ openModalAdd })),
  setStep: (step) => set(() => ({ step })),
  setSelectedTab: (selectedTab) => set(() => ({ selectedTab })),
  setImages: (images) => set(() => ({ images })),
  setSubCategoryList: (subCategoryList) => set(() => ({ subCategoryList })),
  setIsEdit: (isEdit) => set(() => ({ isEdit })),
  setIsUpload: (isUpload) => set(() => ({ isUpload })),
  handleOpenModalAdd: () => set({ openModalAdd: true }),
  handleOpenModalOrder: () => set({ openModalOrder: true }),
  handleCloseModal: () =>
    set({ openModalAdd: false, openModalEdit: false, openModalOrder: false }),
  handleOpenDialogDelete: () => set({ openDialogDelete: true }),
  handleCloseDialogDelete: () => set({ openDialogDelete: false }),
  handleOpenModalEdit: () => set({ openModalEdit: true }),
  resetFieldsEdit: () =>
    set({
      categoryID: "",
      subCategoryID: "",
      description: "",
      images: [],
      isEdit: false,
      isUpload: false,
    }),
  removeImage: (imageName) =>
    set((state) => ({
      images: state.images.filter((image) => image.name !== imageName),
    })),
}));

export default useDashboardStore;
