import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import useUserStore from "@/UserStore";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn, checkLoginStatus } = useUserStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8085/api/auth/login",
        {
          username: email,
          password,
        }
      );

      // Handle successful login
      const sessionToken = response.data.sessionToken;
      // Store the session token in local storage
      localStorage.setItem("sessionToken", sessionToken);
      // Update the user store to set isLoggedIn to true
      setIsLoggedIn(true);
      checkLoginStatus();
      navigate("/dashboard");
      console.log("Login successful");
    } catch (error) {
      // Handle login error
      setError("Invalid email or password");
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {error && <p className="text-red-500">{error}</p>}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <CardFooter>
            <Button className="w-full" type="submit">
              Sign in
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
