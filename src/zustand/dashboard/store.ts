import { create } from "zustand";

type State = {
  category: string;
  description: string;
  subCategory: string;
  openModal: boolean;
};

type Action = {
  setCategory: (category: State["category"]) => void;
  setSubCategory: (subCategory: State["subCategory"]) => void;
  setDescription: (description: State["description"]) => void;
  setOpenModal: (openModal: State["openModal"]) => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
};

const useDashboardStore = create<State & Action>((set) => ({
  category: "",
  subCategory: "",
  description: "",
  openModal: false,

  setCategory: (category) => set(() => ({ category })),
  setSubCategory: (subCategory) => set(() => ({ subCategory })),
  setDescription: (description) => set(() => ({ description })),
  setOpenModal: (openModal) => set(() => ({ openModal })),
  handleOpenModal: () => set({ openModal: true }),
  handleCloseModal: () => set({ openModal: false }),
}));

export default useDashboardStore;
