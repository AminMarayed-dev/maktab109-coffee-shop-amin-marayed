import { create } from "zustand";

type State = {
  openDrawer: boolean;
  anchorDrawer: string;
  anchorMenu: HTMLElement | null;
  isPersist: boolean;
};

type Action = {
  //   setOpenDrawer: (openDrawer: State["openDrawer"]) => void;
  //   setOpenMenu: (openMenu: State["openMenu"]) => void;
  //   setAnchorDrawer: (anchorDrawer: State["anchorDrawer"]) => void;
  setIsPersist: (isPersist: State["isPersist"]) => void;
  //   setAnchorMenu: (anchorMenu: React.MouseEvent<HTMLElement> | null) => void;
  handleDrawerMenu: () => void;
  handleDrawerBasket: () => void;
  handleCloseDrawer: () => void;
  handleOpenMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseMenu: () => void;
};

const useHeaderStore = create<State & Action>((set) => ({
  openDrawer: false,
  anchorDrawer: "",
  isPersist: false,
  anchorMenu: null,
  //   setOpenDrawer: (openDrawer) => set(() => ({ openDrawer })),
  //   setAnchorDrawer: (anchorDrawer) => set(() => ({ anchorDrawer })),
  setIsPersist: (isPersist) => set(() => ({ isPersist })),
  handleDrawerMenu: () => set({ anchorDrawer: "left", openDrawer: true }),
  handleDrawerBasket: () => set({ anchorDrawer: "right", openDrawer: true }),
  handleCloseDrawer: () => set({ openDrawer: false }),
  handleOpenMenu: (event) => set({ anchorMenu: event.currentTarget }),
  handleCloseMenu: () => set({ anchorMenu: null }),
}));

export default useHeaderStore;
