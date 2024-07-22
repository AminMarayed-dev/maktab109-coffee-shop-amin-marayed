import { localization } from "@/constant/localization";
import { create } from "zustand";

const { dashboard } = localization;

type State = {
  category: string;
  description: string;
  subCategory: string;
  openModal: boolean;
  step: number;
  selectedTab: string;
};

type Action = {
  setCategory: (category: State["category"]) => void;
  setSubCategory: (subCategory: State["subCategory"]) => void;
  setDescription: (description: State["description"]) => void;
  setOpenModal: (openModal: State["openModal"]) => void;
  setStep: (step: State["step"]) => void;
  setSelectedTab: (selectedTab: State["selectedTab"]) => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
};

const useDashboardStore = create<State & Action>((set) => ({
  category: "",
  subCategory: "",
  description: "",
  openModal: false,
  step: 0,
  selectedTab: dashboard.products,

  setCategory: (category) => set(() => ({ category })),
  setSubCategory: (subCategory) => set(() => ({ subCategory })),
  setDescription: (description) => set(() => ({ description })),
  setOpenModal: (openModal) => set(() => ({ openModal })),
  setStep: (step) => set(() => ({ step })),
  setSelectedTab: (selectedTab) => set(() => ({ selectedTab })),
  handleOpenModal: () => set({ openModal: true }),
  handleCloseModal: () => set({ openModal: false }),
}));

export default useDashboardStore;
