import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = { valueDatePicker: string };

type Action = {
  setValueDatePicker: (valueDatePicker: State["valueDatePicker"]) => void;
};

const usePaymentStore = create(
  persist<State & Action>(
    (set) => ({
      valueDatePicker: "",
      setValueDatePicker: (valueDatePicker) => set(() => ({ valueDatePicker })),
    }),
    {
      name: "payment-store",
    }
  )
);

export default usePaymentStore;
