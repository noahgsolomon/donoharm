import axios from "axios";
import { create } from "zustand";

interface PostState {
  posts: {
    text: string;
    image: string;
    username: string;
  }[];
  setPosts: (
    posts: { text: string; image: string; username: string }[]
  ) => void;
  fetchPosts: () => Promise<void>;
}
const usePostStore = create<PostState>((set) => ({
  posts: [],
  setPosts: (posts) => set(() => ({ posts })),
  fetchPosts: async () => {
    try {
      const response = await axios.get("http://localhost:8085/api/posts");
      if (response.status === 200) {
        set({ posts: response.data });
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  },
}));

export default usePostStore;
