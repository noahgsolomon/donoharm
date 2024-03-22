import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
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
  );
}
