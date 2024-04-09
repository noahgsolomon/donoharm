import { create } from "zustand";

interface PostState {
  posts: { name: string; image: string; text: string }[];
  setPosts: (post: { name: string; image: string; text: string }) => void;
}

const usePostStore = create<PostState>((set) => ({
  posts: [
    {
      name: "@buzzo",
      image: "/pfp-9.webp",
      text: "In a world where words are weapons, Every utterance becomes a transgression.",
    },
    {
      name: "@jane_doe",
      image: "/pfp-12.webp",
      text: "The silence between the notes is where the true melody lies.",
    },
    {
      name: "@john_smith",
      image: "/pfp-11.webp",
      text: "In the labyrinth of the mind, thoughts intertwine and dreams unwind.",
    },
  ],
  setPosts: (post) => set((state) => ({ posts: [post, ...state.posts] })),
}));

export default usePostStore;
