import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ViewStore {
  viewId: string;
  setViewId: (id: any) => void;
}

export const useViewStore = create<ViewStore>()(
  devtools(
    persist(
      (set) => ({
        viewId: "",
        setViewId: (id: any) => set((state: any) => ({ viewId: id })),
      }),
      {
        name: "view-storage",
      }
    )
  )
);
