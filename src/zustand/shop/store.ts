import { create } from "zustand";

type State = { selectFilterValue: string };

type Action = {
  setSelectFilterValue: (selectFilterValue: State["selectFilterValue"]) => void;
};

const useShopStore = create<State & Action>((set) => ({
  selectFilterValue: "",
  setSelectFilterValue: (selectFilterValue) =>
    set(() => ({ selectFilterValue })),
}));

export default useShopStore;
