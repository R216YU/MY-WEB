import path from "path";
import { create } from "zustand";

const pages = ["EntryPoint", "AboutMe", "Works", "Diary"] as const;

type NavigationState = {
  history: (typeof pages)[number][];
  current: (typeof pages)[number];
  push: (path: (typeof pages)[number]) => void;
  back: () => void;
};

export const useNavigationStore = create<NavigationState>((set, get) => ({
  history: ["EntryPoint"],
  current: "EntryPoint",
  push: (path: (typeof pages)[number]) =>
    set((state) => ({
      history: [...state.history, path],
      current: path,
    })),
  back: () =>
    set((state) => {
      if (state.history.length > 1) {
        const newHistory = state.history.slice(0, -1);
        return {
          history: newHistory,
          current: newHistory[newHistory.length - 1],
        };
      }
      return state;
    }),
}));
