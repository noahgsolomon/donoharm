import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <>
      <div className=" absolute top-8 left-0 right-0 border rounded-lg shadow-sm p-2 flex justify-between w-[800px] max-w-[90%] items-center mx-auto bg-card">
        <Link
          to={"/"}
          className="cursor-pointer hover:scale-[101%] active:scale-[99%] transition-all"
        >
          <img
            className=" w-[50px] h-[50px] rounded-full border"
            alt="donoharm"
            src="/donoharm.webp"
          />
        </Link>

        <div className="flex flex-row gap-2">
          <Button variant={"outline"}>Log in</Button>
          <Button>Join us</Button>
        </div>
      </div>
      <div className="h-36"></div>
    </>
  );
}

{
  /**
<div className="flex flex-row gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <img
                src="/pfp-15.webp"
                alt="profile"
                className="cursor-pointer rounded-full border w-[50px] h-[50px]"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="cursor-pointer">
                Log out
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-500 cursor-pointer">
                Delete Account
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
*/
}
