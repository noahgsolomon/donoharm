import { Button } from "@/components/ui/button";
import { EyeOff } from "lucide-react";
import PostCard from "./PostCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export default function HiddenPostCard({
  text,
  image,
  name,
}: {
  text: string;
  image: string;
  name: string;
}) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="relative">
      <div
        className={`${
          hidden ? "" : "hidden"
        } absolute inset-0 bg-white bg-opacity-50 backdrop-blur-sm z-10 border rounded-lg flex flex-col gap-2 justify-center items-center`}
      >
        <EyeOff className="text-primary/60" />
        <p className="font-krypton text-primary/60 text-xs">
          content might be offensive
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant={"none"}
              className="text-xs text-primary/60 underline font-krypton"
            >
              see why
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[400px]">
            <p>
              Offense lurks in each word spoken, Meanings twisted, feelings
              broken.
            </p>
            <p>
              Perspectives shift, sensitivities change, What once seemed
              harmless now feels strange.
            </p>
          </DialogContent>
        </Dialog>

        <Button
          onClick={() => setHidden(false)}
          size={"sm"}
          variant={"outline"}
        >
          view
        </Button>
      </div>
      <PostCard name={name} text={text} image={image} />
    </div>
  );
}
