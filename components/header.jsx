"use client";
import * as React from "react";
import Link from "next/link";
// import Router from "next/router";
// import { ModalAuthentication } from "./modalAuthentication";
import { useEffect, useState } from "react";
import { ModalAuthentication } from "./modalAuthentication";
import { clearStorage, getStorage, getToken } from "@/lib/utils/utils";
import { Button } from "./ui/button";
import Image from "next/image";
import { PlaneIcon } from "lucide-react";

const Header = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  // const router = Router();

  const signOut = async () => {
    try {
      await clearStorage();
      // Router.push("/search-flight");
      // Router.reload(window.location.pathname);
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
          <nav className="bg-white dark:bg-gray-900 fixed w-full  top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <Link
                href="/search-flight"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <Image
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8"
                  alt="Flowbite Logo"
                  width={100}
                  height={100}
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  TOURTRIP
                </span>
              </Link>

              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                {isSignIn ? (
                  <Button
                    variant="ghost"
                    size=""
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => signOut()}
                  >
                    <i>Sign Out</i>
                  </Button>
                ) : (
                  <ModalAuthentication />
                )}
              </div>
              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link
                      href="/search-flight"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Flight
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/my-booking"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Booking
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
