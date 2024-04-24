import Navbar from "@/components/Navbar";
import { SignupForm } from "./SignupForm";

export default function Signup() {
  return (
    <>
      <Navbar />
      <div className="h-[calc(100vh-16rem)] w-screen flex flex-col items-center justify-center">
        <SignupForm />
      </div>
    </>
  );
}
