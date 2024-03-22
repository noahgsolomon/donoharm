import Navbar from "@/components/Navbar";
import PostCard from "./components/PostCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Brain, Plus } from "lucide-react";
import SharePost from "./components/SharePost";

export default function Dashboard() {
  return (
    <>
      <Navbar />
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
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                className="flex items-center justify-center"
                key={index}
              >
                <PostCard text="In a world where words are weapons, Every utterance becomes a transgression." />
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
  );
}
