import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  openDrawer: boolean;
  anchorDrawer: "left" | "right" | "bottom" | "top" | undefined | string;
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
  persist<any>(
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
      setIsPersist: (isPersist: any) => set(() => ({ isPersist })),
      handleDrawerMenu: () => set({ anchorDrawer: "left", openDrawer: true }),
      handleDrawerBasket: () =>
        set({ anchorDrawer: "right", openDrawer: true }),
      handleCloseDrawer: () => set({ openDrawer: false }),
      handleOpenMenu: (event: any) => set({ anchorMenu: event.currentTarget }),
      handleCloseMenu: () => set({ anchorMenu: null }),
      handleOpenDialogSearchBox: () => set({ openDialogSearchBox: true }),
      handleCloseDialogSearchBox: () => set({ openDialogSearchBox: false }),
      setSearchValue: (searchValue: any) => set(() => ({ searchValue })),
      setDebouncedSearchValue: (debouncedSearchValue: any) =>
        set(() => ({ debouncedSearchValue })),
      setRecentSearchProducts: (recentSearchProducts: any) =>
        set(() => ({ recentSearchProducts })),
    }),
    {
      name: "recent-search",
      partialize: (state) => ({ filterProducts: state.recentSearchProducts }),
    }
  )
);

export default useHeaderStore;
