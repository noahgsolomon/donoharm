import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Skull } from "lucide-react";
import axios from "axios";
import usePostStore from "@/PostStore";
import { toast } from "sonner";
import useUserStore from "@/UserStore";

export default function PostCard({
  text,
  image,
  name,
}: {
  text: string;
  image: string;
  name: string;
}) {
  console.log(name);
  const { setPosts, posts } = usePostStore();
  const { username, setIsLoggedIn } = useUserStore();

  const handleLogout = () => {
    localStorage.removeItem("sessionToken");
    setIsLoggedIn(false);
  };

  const handleDeleteUser = async () => {
    const deletedUsername = name;

    try {
      await axios.delete(
        `http://localhost:8085/api/user?user=${deletedUsername}`
      );

      toast.success("successfully cancelled user!", { icon: "💀" });

      if (username === deletedUsername) {
        handleLogout();
      }

      const updatedPosts = posts.filter(
        (post) => post.username !== deletedUsername
      );
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <div className="relative p-4 rounded-lg shadow-sm border w-[350px] flex flex-col items-start justify-between gap-4">
      <div className="flex justify-between w-full">
        <div className="flex flex-row items-center gap-2">
          <img
            alt="pfp"
            src={image}
            className="rounded-full border w-[50px] h-[50px]"
          />
          <p className="font-krypton text-sm">{name.split("@")[0]}</p>
        </div>
        {/* 
        {/* 
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
        </DropdownMenu> */}
      </div>
      <div className="pl-4">
        <p className="text-sm">{text}</p>
      </div>
      <div className="w-full flex justify-center">
        <Dialog>
          <DialogTrigger>
            <Tooltip>
              <TooltipTrigger>
                <Button variant={"outline"}>
                  <Skull className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Cancel user</TooltipContent>
            </Tooltip>
          </DialogTrigger>
          <DialogContent className="flex flex-col gap-8 max-w-[400px]">
            Are you sure you want to cancel this user?
            <div className="w-full flex flex-row justify-between">
              <Button variant="outline">No</Button>
              <Button variant="destructive" onClick={handleDeleteUser}>
                Yes
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
