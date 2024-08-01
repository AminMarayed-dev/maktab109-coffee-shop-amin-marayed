import { create } from "zustand";

type State = { openDrawerFilter: boolean };

type Action = {
  handleDrawerFilter: () => void;
  handleCloseDrawerFilter: () => void;
};

const useCommonStore = create<State & Action>((set) => ({
  openDrawerFilter: false,
  handleDrawerFilter: () => set({ openDrawerFilter: true }),
  handleCloseDrawerFilter: () => set({ openDrawerFilter: false }),
}));

export default useCommonStore;
