import { create } from "zustand";
import axios from "axios";

interface UserState {
  isLoggedIn: boolean;
  username: string;
  pfp: string;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setPfp: (pfp: string) => void;
  setUsername: (username: string) => void;
  checkLoginStatus: () => Promise<void>;
}

const useUserStore = create<UserState>((set) => ({
  isLoggedIn: false,
  username: "",
  pfp: "/pfp-1.webp",
  setPfp: (pfp: string) => set(() => ({ pfp })),
  setIsLoggedIn: (isLoggedIn: boolean) => set(() => ({ isLoggedIn })),
  setUsername: (username: string) => set(() => ({ username })),
  checkLoginStatus: async () => {
    try {
      const sessionToken = localStorage.getItem("sessionToken");
      if (sessionToken) {
        const response = await axios.get("http://localhost:8085/api/user", {
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
        });
        set({
          isLoggedIn: response.data.isLoggedIn,
          username: response.data.username,
          pfp: response.data.pfp,
        });
      } else {
        set({ isLoggedIn: false, username: "" });
      }
    } catch (error) {
      console.error("Error checking login status:", error);
      set({ isLoggedIn: false, username: "" });
    }
  },
}));

export default useUserStore;
