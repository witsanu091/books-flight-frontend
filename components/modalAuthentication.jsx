"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { setStorage } from "@/lib/utils/utils";
import { callSignIn, callSignOn } from "@/lib/call-api/callAuthentication";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function ModalAuthentication() {
  const [modeAuth, setModeAuth] = useState(true);
  const [errors, setErrors] = useState({ email: "" });
  const [modalAuthentication, setModalAuthentication] = useState(false);
  const [dataSignOn, setDataSignOn] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    gender: "Male",
    user_name: "",
    password: "",
    enabled: true,
    user_role: "customer",
  });
  const [dataSignIn, setDataSignIn] = useState({
    user_name: "",
    email: "",
    password: "",
    user_role: "customer",
  });

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      return "Email is required";
    } else if (!emailRegex.test(value)) {
      return "Please enter a valid email";
    } else if (value.length < 5) {
      return "Email must be at least 5 characters long";
    }
    return "";
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setDataSignIn({ ...dataSignIn, email: value });

    const error = validateEmail(value);
    setErrors((prevErrors) => ({ ...prevErrors, email: error }));
  };

  const handleEmailSignOnChange = (e) => {
    const { value } = e.target;
    setDataSignOn({ ...dataSignOn, email: value });

    const error = validateEmail(value);
    setErrors((prevErrors) => ({ ...prevErrors, email: error }));
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setDataSignIn({ ...dataSignIn, password: value });
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    try {
      console.log("🚀  dataSignIn:", dataSignIn);

      const result = await callSignIn(dataSignIn);

      if (result) {
        await setStorage({
          key: "token",
          value: result.data?.response_data?.token_id,
        });
        setModalAuthentication(false); // Close the dialog on success
      } else {
        alert("Can't log in. Please check your credentials.");
      }
    } catch (error) {
      console.log("🚀  error:", error);
    }
  };
  const handleSubmitSignOn = async (e) => {
    try {
      e.preventDefault();
      console.log("🚀  dataSignOn:", dataSignOn);

      const result = await callSignOn(dataSignOn);

      if (result) {
        alert("Sign On Success");
        setModeAuth(true);
        setDataSignOn({
          first_name: "",
          last_name: "",
          email: "",
          mobile: "",
          gender: "Male",
          user_name: "",
          password: "",
          enabled: true,
          user_role: "customer",
        });
      } else {
        alert("Can't Sign On. Please check your credentials.");
      }
    } catch (error) {
      console.log("🚀  error:", error);
    }
  };
  const signInWithGoogle = () => {};

  useEffect(() => {
    setModeAuth(true);
  }, []);
  return (
    <Dialog open={modalAuthentication} onOpenChange={setModalAuthentication}>
      <DialogTrigger asChild>
        <Button variant="ghost" onClick={() => setModalAuthentication(true)}>
          <i>Sign In</i>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        {modeAuth ? (
          <div className="flex min-h-[60dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md space-y-6">
              <div className="space-y-2 text-center">
                <DialogTitle className="text-3xl font-bold">
                  Sign In
                </DialogTitle>
              </div>
              <div className="space-y-4">
                <Button variant="outline" className="w-full">
                  <GithubIcon className="mr-2 h-4 w-4" />
                  Sign in with GitHub
                </Button>
                <Button variant="outline" className="w-full">
                  <ChromeIcon className="mr-2 h-4 w-4" />
                  Sign in with Google
                </Button>
                <Button variant="outline" className="w-full">
                  <TwitterIcon className="mr-2 h-4 w-4" />
                  Sign in with Twitter
                </Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or sign in with email
                    </span>
                  </div>
                </div>
                <form onSubmit={handleSubmitSignIn}>
                  <div className="grid gap-2 py-4">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="text"
                      id="email"
                      value={dataSignIn.email}
                      onChange={handleEmailChange}
                      placeholder="m@example.com"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full mt-6"
                    disabled={!!errors.email}
                    // onClick={handleSubmit}
                  >
                    Sign In
                  </Button>
                </form>

                <div className="mt-6  text-center text-sm">
                  Don't have an account?{" "}
                  <p className="underline" onClick={() => setModeAuth(false)}>
                    Register
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex min-h-[80dvh] flex-col items-center justify-center bg-background px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md space-y-6">
              <form onSubmit={handleSubmitSignOn}>
                <div className="space-y-2 text-center">
                  <DialogTitle className="text-3xl font-bold">
                    Register
                  </DialogTitle>
                  <p className="text-muted-foreground">
                    Create a new account to access our platform.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4  pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="your first name"
                      value={dataSignOn.first_name}
                      onChange={(e) =>
                        setDataSignOn({
                          ...dataSignOn,
                          first_name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="your last name"
                      value={dataSignOn.last_name}
                      onChange={(e) =>
                        setDataSignOn({
                          ...dataSignOn,
                          last_name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <Label htmlFor="email" className="pt-4">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={dataSignOn.email}
                    onChange={handleEmailSignOnChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="username" className="pt-4">
                    Username
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="example"
                    value={dataSignOn.user_name}
                    onChange={(e) =>
                      setDataSignOn({
                        ...dataSignOn,
                        user_name: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password" className="pt-4">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={dataSignOn.password}
                    onChange={(e) =>
                      setDataSignOn({
                        ...dataSignOn,
                        password: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Phone</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      value={dataSignOn.mobile}
                      onChange={(e) =>
                        setDataSignOn({
                          ...dataSignOn,
                          mobile: e.target.value,
                        })
                      }
                      placeholder="09xxxxxxxx"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select
                      id="gender"
                      value={dataSignOn.gender}
                      onValueChange={(value) =>
                        setDataSignOn({ ...dataSignOn, gender: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={dataSignOn.gender || "Male"}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="pt-4">
                  <Button type="submit" className="w-full py-4">
                    Sign Up
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Already have an account?
                  <div className="underline" onClick={() => setModeAuth(true)}>
                    Sign In
                  </div>
                </div>
              </form>
            </div>
          </div>
          // </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
