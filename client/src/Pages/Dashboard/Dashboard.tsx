import Navbar from "@/components/Navbar";
import PostCard from "./components/PostCard.tsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Brain, Plus } from "lucide-react";
import SharePost from "./components/SharePost.tsx";
import { useState } from "react";
import useUserStore from "@/UserStore.tsx";
import Error from "../Error/Error.tsx";
import usePostStore from "@/PostStore.tsx";

export default function Dashboard() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  const posts = usePostStore((state) => state.posts);

  return (
    <>
      <Navbar />
      {isLoggedIn ? (
        <>
          <div className="text-center pt-12 font-krypton">
            <p>INFLUENCE YOUR MIND</p>
            <p className="text-red-500 text-xs">PROTECT AT ALL COSTS</p>

            <p className="text-xs">
              share thought {"->"}
              <SharePost />
            </p>
          </div>

          <div className="overflow-x-hidden flex h-[50vh] flex-col items-center justify-center">
            <Carousel className="flex w-full flex-col items-center justify-center">
              <CarouselContent>
                {posts.map((post, index) => (
                  <CarouselItem
                    className="flex items-center justify-center"
                    key={index}
                  >
                    <PostCard
                      image={post.image}
                      name={post.name}
                      text={post.text}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex w-full justify-center gap-4 pt-4">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </>
      ) : (
        <Error />
      )}
    </>
  );
}
