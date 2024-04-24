import { create } from "zustand";

interface UserState {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const useUserStore = create<UserState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn: boolean) => set(() => ({ isLoggedIn })),
}));

export default useUserStore;
