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
import axios from "axios";
import useUserStore from "@/UserStore";

export default function SharePost() {
  const [text, setText] = useState("");
  const { setPosts, posts } = usePostStore();

  const { username, pfp } = useUserStore();

  const handleAddPost = async () => {
    try {
      const sessionToken = localStorage.getItem("sessionToken");

      const response = await axios.post(
        "http://localhost:8085/api/posts",
        {
          text,
          image: pfp,
        },
        {
          headers: {
            Authorization: sessionToken,
          },
        }
      );

      const newPost = {
        username: `@${username.split("@")[0]}`,
        image: pfp,
        text,
      };
      setPosts([...posts, newPost]);

      toast.success("Post created successfully");
      setText("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create post");
    }
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
                onClick={() => setText("")}
              >
                Cancel
              </Button>
            </DialogClose>

            <DialogClose>
              <Button
                onClick={() => {
                  handleAddPost();
                  setText("");
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
