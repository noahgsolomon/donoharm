import Navbar from "@/components/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <Navbar />
      <div className="h-[60%] w-screen">
        <div className="flex h-full flex-col items-center justify-center">
          {/* <p className="text-2xl font-krypton">DO NO HARM </p> */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <p className="text-center text-3xl font-krypton">
              YOU SEEM LOST, FRIEND
            </p>
            <Link className={buttonVariants()} to={"/"}>
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
