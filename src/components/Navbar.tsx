import React from "react";
import { Link } from "react-router-dom";
import { Button, buttonVariants } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import useUserStore from "@/UserStore";

export default function Navbar() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const setIsLoggedIn = useUserStore((state) => state.setIsLoggedIn);
  return (
    <>
      <div className="absolute top-8 left-0 right-0 border rounded-lg shadow-sm p-2 flex justify-between w-[800px] max-w-[90%] items-center mx-auto bg-card">
        <Link
          to="/"
          className="cursor-pointer hover:scale-[101%] active:scale-[99%] transition-all"
        >
          <img
            className="w-[50px] h-[50px] rounded-full border"
            alt="donoharm"
            src="/donoharm.webp"
          />
        </Link>

        <div className="flex flex-row gap-2">
          {isLoggedIn ? (
            <>
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
                    <DropdownMenuItem asChild>
                      <Link to={"/"} onClick={() => setIsLoggedIn(false)}>
                        Log out
                      </Link>
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem className="text-red-500 cursor-pointer">
                      Delete Account
                    </DropdownMenuItem> */}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </>
          ) : (
            <>
              <Link
                to={"/dashboard"}
                className={buttonVariants({ variant: "outline" })}
                onClick={() => setIsLoggedIn(true)}
              >
                Log in
              </Link>
              {/* <Button>Join us</Button> */}
            </>
          )}
        </div>
      </div>
      <div className="h-36"></div>
    </>
  );
}
