import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Image } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import usePostStore from "@/PostStore";
import { useState } from "react";
import { toast } from "sonner";
import { DialogClose } from "@radix-ui/react-dialog";

export default function SharePost() {
  const [text, setText] = useState("");
  const setPosts = usePostStore((state) => state.setPosts);

  const handleAddPost = () => {
    const newPost = {
      name: "@unimplemented",
      image: "/pfp-15.webp",
      text,
    };
    setPosts(newPost);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"} className="mt-4">
          +
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>What's on your mind?</DialogTitle>
          <DialogDescription className="text-red-500/70 text-xs">
            The internet doesn't forget.
          </DialogDescription>
        </DialogHeader>
        <div className="relative">
          <Textarea
            className="min-h-[200px]"
            placeholder="// your idea here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="absolute bottom-4 left-0" variant={"none"}>
                <Image className=" text-border size-8 " />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Upload image</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <DialogFooter>
          <div className="flex justify-between w-full">
            <DialogClose>
              <Button
                variant={"destructive"}
                className="flex gap-1 items-center"
                type="submit"
              >
                Cancel
              </Button>
            </DialogClose>

            <DialogClose>
              <Button
                onClick={() => {
                  toast.success("uploaded post!");
                  handleAddPost();
                }}
                variant={"outline"}
                className="flex gap-1 items-center"
                type="submit"
              >
                Share
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
