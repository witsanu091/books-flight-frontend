"use client";
import Link from "next/link";
// import { ModalAuthentication } from "./modalAuthentication";
import { useEffect, useState } from "react";
import { ModalAuthentication } from "./modalAuthentication";
import { clearStorage, getStorage, getToken } from "@/lib/utils/utils";
import { Button } from "./ui/button";

const Header = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  // console.log("🚀  token:", token);

  const signOut = async () => {
    await clearStorage();
    try {
    } catch (error) {
      console.log("🚀  error:", error);
    }
  };

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      if (token) {
        setIsSignIn(true);
      }
    };

    fetchToken();
  }, [isSignIn]);

  return (
    <>
      <header id="header" className="smt-header">
        <div id="header-wrap">
          <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="text-lg font-bold">
                <Link href="/search-flight">
                  <div className="hover:text-gray-200 focus:text-gray-400 focus:outline-none">
                    Flight
                  </div>
                </Link>
              </div>
              <div className="hidden md:flex space-x-4">
                <Link href="my-booking">
                  <i className="hover:text-gray-200 focus:text-gray-350 focus:outline-none">
                    My Booking
                  </i>
                </Link>
                <Link href="search-flight">
                  <i className="hover:text-gray-200 focus:text-gray-350 focus:outline-none">
                    flight Status
                  </i>
                </Link>
                {/* <Link href="/sign-in">
                  <i className="hover:text-gray-200 focus:text-gray-400 focus:outline-none">
                    Login
                  </i>
                </Link> */}
                <div>
                  <i className="hover:text-gray-200 focus:text-gray-400 focus:outline-none">
                    {/* Profile */}
                    {isSignIn ? (
                      <Button
                        variant="ghost"
                        size=""
                        className=""
                        onClick={() => signOut()}
                      >
                        <i>Sign Out</i>
                      </Button>
                    ) : (
                      <ModalAuthentication />
                    )}
                  </i>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
