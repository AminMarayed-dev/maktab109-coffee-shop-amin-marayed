import { create } from "zustand";

type State = { selectFilterValue: string; openDialog: boolean };

type Action = {
  setSelectFilterValue: (selectFilterValue: State["selectFilterValue"]) => void;
  handleOpenDialog: () => void;
  handleCloseDialog: () => void;
};

const useShopStore = create<State & Action>((set) => ({
  selectFilterValue: "",
  openDialog: false,
  setSelectFilterValue: (selectFilterValue) =>
    set(() => ({ selectFilterValue })),
  handleOpenDialog: () => set({ openDialog: true }),
  handleCloseDialog: () => set({ openDialog: false }),
}));

export default useShopStore;
