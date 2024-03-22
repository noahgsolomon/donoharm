import { Button } from "@/components/ui/button";
import { Heart, Skull } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function PostCard({
  text,
  imageUrl,
  videoUrl,
}: {
  text: string;
  imageUrl?: string;
  videoUrl?: string;
}) {
  return (
    <div className="relative p-4 rounded-lg shadow-sm border w-[350px] flex flex-col items-start justify-between gap-4">
      <div className="flex justify-between w-full">
        <div className="flex flex-row items-center gap-2">
          <img
            alt="pfp"
            src="/pfp-1.webp"
            className="rounded-full border w-[50px] h-[50px]"
          />
          <p className="font-krypton text-sm">
            @buzzo <span className="text-xs text-primary/70"> 6h ago</span>
          </p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"ghost"}
              className="font-krypton text-primary/60 text-xs"
            >
              ...
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="cursor-pointer text-blue-500">
              Edit
            </DropdownMenuItem>

            <DropdownMenuItem className="cursor-pointer text-red-500">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="pl-4">
        <p className="text-sm">{text}</p>
      </div>
      <div className="flex w-full justify-between">
        <Button variant={"none"}>
          <Heart className="size-4 text-pink-500" />
        </Button>
        <Button variant={"none"}>
          <Skull className="size-4" />
        </Button>
      </div>
    </div>
  );
}
