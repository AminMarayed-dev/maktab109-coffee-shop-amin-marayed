// import { create } from "zustand";

// type State = {
//   openDrawer: boolean;
//   anchorDrawer: string;
//   anchorMenu: HTMLElement | null;
//   isPersist: boolean;
//   openDialogSearchBox: boolean;
//   searchValue: string;
//   filterProducts: any[];
//   debouncedSearchValue: string;
// };

// type Action = {
//   setIsPersist: (isPersist: State["isPersist"]) => void;
//   handleDrawerMenu: () => void;
//   handleDrawerBasket: () => void;
//   handleCloseDrawer: () => void;
//   handleOpenMenu: (event: React.MouseEvent<HTMLElement>) => void;
//   handleCloseMenu: () => void;
//   handleOpenDialogSearchBox: () => void;
//   handleCloseDialogSearchBox: () => void;
//   setSearchValue: (searchValue: State["searchValue"]) => void;
//   setDebouncedSearchValue: (
//     debouncedSearchValue: State["debouncedSearchValue"]
//   ) => void;
//   setFilterProducts: (filterProducts: State["filterProducts"]) => void;
// };

// const useHeaderStore = create<State & Action>((set) => ({
//   openDrawer: false,
//   anchorDrawer: "",
//   isPersist: false,
//   anchorMenu: null,
//   openDrawerFilter: false,
//   openDialogSearchBox: false,
//   searchValue: "",
//   debouncedSearchValue: "",
//   filterProducts: [],
//   setFilterProducts: (filterProducts) => set(() => ({ filterProducts })),
//   setSearchValue: (searchValue) => set(() => ({ searchValue })),
//   setDebouncedSearchValue: (debouncedSearchValue) =>
//     set(() => ({ debouncedSearchValue })),
//   setIsPersist: (isPersist) => set(() => ({ isPersist })),
//   handleDrawerMenu: () => set({ anchorDrawer: "left", openDrawer: true }),
//   handleDrawerBasket: () => set({ anchorDrawer: "right", openDrawer: true }),
//   handleCloseDrawer: () => set({ openDrawer: false }),
//   handleOpenMenu: (event) => set({ anchorMenu: event.currentTarget }),
//   handleCloseMenu: () => set({ anchorMenu: null }),
//   handleOpenDialogSearchBox: () => set({ openDialogSearchBox: true }),
//   handleCloseDialogSearchBox: () => set({ openDialogSearchBox: false }),
// }));

// export default useHeaderStore;

import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  openDrawer: boolean;
  anchorDrawer: string;
  anchorMenu: HTMLElement | null;
  isPersist: boolean;
  openDialogSearchBox: boolean;
  searchValue: string;
  recentSearchProducts: any[];
  debouncedSearchValue: string;
};

type Action = {
  setIsPersist: (isPersist: State["isPersist"]) => void;
  handleDrawerMenu: () => void;
  handleDrawerBasket: () => void;
  handleCloseDrawer: () => void;
  handleOpenMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseMenu: () => void;
  handleOpenDialogSearchBox: () => void;
  handleCloseDialogSearchBox: () => void;
  setSearchValue: (searchValue: State["searchValue"]) => void;
  setDebouncedSearchValue: (
    debouncedSearchValue: State["debouncedSearchValue"]
  ) => void;
  setRecentSearchProducts: (
    filterProducts: State["recentSearchProducts"]
  ) => void;
};

const useHeaderStore = create(
  persist<State & Action>(
    (set) => ({
      openDrawer: false,
      anchorDrawer: "",
      isPersist: false,
      anchorMenu: null,
      openDrawerFilter: false,
      openDialogSearchBox: false,
      searchValue: "",
      debouncedSearchValue: "",
      recentSearchProducts: [],
      setIsPersist: (isPersist) => set(() => ({ isPersist })),
      handleDrawerMenu: () => set({ anchorDrawer: "left", openDrawer: true }),
      handleDrawerBasket: () =>
        set({ anchorDrawer: "right", openDrawer: true }),
      handleCloseDrawer: () => set({ openDrawer: false }),
      handleOpenMenu: (event) => set({ anchorMenu: event.currentTarget }),
      handleCloseMenu: () => set({ anchorMenu: null }),
      handleOpenDialogSearchBox: () => set({ openDialogSearchBox: true }),
      handleCloseDialogSearchBox: () => set({ openDialogSearchBox: false }),
      setSearchValue: (searchValue) => set(() => ({ searchValue })),
      setDebouncedSearchValue: (debouncedSearchValue) =>
        set(() => ({ debouncedSearchValue })),
      setRecentSearchProducts: (recentSearchProducts) =>
        set(() => ({ recentSearchProducts })),
    }),
    {
      name: "recent-search",
      partialize: (state) => ({ filterProducts: state.recentSearchProducts }),
    }
  )
);

export default useHeaderStore;
