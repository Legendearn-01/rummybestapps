import { create } from "zustand";

export const useAppStore = create((set) => ({
  topApps: [],
  games: [],
  bestForAllGames:[],
  newApps: [],
  teenPatti: [],
  setAllApps: (apps) => {
    set({...apps})
  },
  setTopApps: (apps) => set({ topApps: apps }),
  setGames: (apps) => set({ games: apps }),
  setbestForAllGames: (apps) => set({ bestForAllGames: apps }),
  setNewApps: (apps) => set({ newApps: apps }),
  setTeenPatti: (apps) => set({ teenPatti: apps }),
}));