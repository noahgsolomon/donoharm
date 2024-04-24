import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { redirect, useNavigate } from "react-router-dom";
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

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8085/api/auth/signup",
        {
          username: email,
          password,
        }
      );

      // Handle successful signup
      console.log("Signup successful");
      navigate("/login");
    } catch (error) {
      // Handle signup error
      setError("Error signing up. Please try again.");
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your email and password to create an account.
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
              Sign Up
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
