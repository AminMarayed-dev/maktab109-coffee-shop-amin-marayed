import { Product } from "@/types/common/product.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  cart: Product[];
  totalItems: number;
  totalPrice: number;
  productCounts: { [productId: string]: number };
  openDialog: boolean;
};

type Actions = {
  addToCart: (product: Product) => void;
  removeCart: (productID: string) => void;
  setCount: (productId: string, count: number) => void;
  setCountAndTotal: (productId: string, count: number) => void;
  handleOpenDialog: () => void;
  handleCloseDialog: () => void;
};

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  productCounts: {},
  openDialog: false,
};

export const useCartStore = create(
  persist<State & Actions>(
    (set, get) => ({
      cart: INITIAL_STATE.cart,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      productCounts: INITIAL_STATE.productCounts,
      openDialog: INITIAL_STATE.openDialog,

      addToCart: (product: Product) => {
        const { cart, productCounts } = get();
        const count = productCounts[product?._id] || 1;
        const cartItem = cart.find((item) => item._id === product._id);

        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item._id === product._id
              ? { ...item, count: (item.count as number) + count }
              : item
          );

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + count,
            totalPrice: state.totalPrice + product.price * count,
            productCounts: {
              ...state.productCounts,
              [product._id]: state.productCounts[product?._id] || 0 + count,
            },
          }));
        } else {
          const updatedCart = [...cart, { ...product, count }];

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + count,
            totalPrice: state.totalPrice + product.price * count,
            productCounts: {
              ...state.productCounts,
              [product._id]: count,
            },
          }));
        }
      },

      removeCart: (productID: string) => {
        const { cart, productCounts } = get();
        const itemToRemove = cart.find((item) => item._id === productID);
        console.log(itemToRemove);
        const updatedCart = cart.filter(
          (item) => item._id !== itemToRemove?._id
        );

        set((state) => ({
          cart: updatedCart,
          totalItems:
            state.totalItems - (itemToRemove ? itemToRemove.count : 0),
          totalPrice:
            state.totalPrice -
            (itemToRemove ? itemToRemove.price * itemToRemove.count : 0),
          productCounts: {
            ...state.productCounts,
            [productID]: 0,
          },
        }));
      },

      setCount: (productId: string, count: number) => {
        set((state) => ({
          productCounts: {
            ...state.productCounts,
            [productId]: count,
          },
        }));
      },

      setCountAndTotal: (productId: string, count: number) => {
        const { productCounts, totalItems, cart } = get();
        const currentCount = productCounts[productId] || 0;
        const updatedTotalItems = totalItems - currentCount + count;

        const updatedCart = cart.map((item) =>
          item._id === productId ? { ...item, count } : item
        );

        set((state) => ({
          productCounts: {
            ...state.productCounts,
            [productId]: count,
          },
          totalItems: updatedTotalItems,
          cart: updatedCart,
        }));
      },

      handleOpenDialog: () => set({ openDialog: true }),
      handleCloseDialog: () => set({ openDialog: false }),
    }),
    {
      name: "cart-storage",
    }
  )
);
