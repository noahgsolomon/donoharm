import Navbar from "@/components/Navbar";
import { LoginForm } from "./LoginForm";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="h-[calc(100vh-16rem)] w-screen flex flex-col items-center justify-center">
        <LoginForm />
      </div>
    </>
  );
}
