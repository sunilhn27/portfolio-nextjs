import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../image/logo-1.png";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { data: session } = useSession();

  return (
    <div className="text-white bg-slate-700">
      <nav className="flex justify-between items-center px-5">
        <Link href={"/"}>
          <Image className="h-16 w-16" src={logo} alt="img" />
        </Link>
        <div className="hidden md:flex space-x-5 items-center  font-bold">
          <Link href={"/"} className="hover:text-orange-400">
            Home
          </Link>
          <Link href={"/experience"} className="hover:text-orange-400">
            Experience
          </Link>
          <Link href={"/contactme"} className="hover:text-orange-400">
            Contact Me
          </Link>
          <Link href={"/projects"} className="hover:text-orange-400">
            Projects
          </Link>
          {session ? (
            <>
              <p className="hover:text-orange-400 pl-4">{session.user.name}</p>
              <button
                onClick={signOut}
                className="bg-orange-400  px-2 py-1 font-bold rounded-lg"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={signIn}
              className="bg-orange-400  px-2 py-1 font-bold rounded-lg"
            >
              Sign In
            </button>
          )}
          <i className=" text-white fa-solid fa-bars text-2xl"></i>
        </div>
        <div className="md:hidden">
          <button button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <Image src={"/close.svg"} width={30} height={30} alt="close" />
            ) : (
              <Image
                src={"/hamburger-menu.svg"}
                width={30}
                height={30}
                alt="hamburger"
              />
            )}
          </button>
          <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
            <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
              <Link href={"/"} className="block py-2 hover:text-orange-400">
                {" "}
                Home
              </Link>
              <Link
                href={"/experience"}
                className="block py-2 hover:text-orange-400"
              >
                Experience
              </Link>
              <Link
                href={"/contactme"}
                className="block py-2 hover:text-orange-400"
              >
                Contact Me
              </Link>
              <Link
                href={"/projects"}
                className="block py-2 hover:text-orange-400"
              >
                Projects
              </Link>
              {session ? (
                <>
                  <p className="block py-2 pl-4 hover:text-orange-400">
                    {session.user.name}
                  </p>
                  <button
                    onClick={signOut}
                    className="block bg-orange-400 px-2 py-1 font-bold rounded-lg"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={signIn}
                  className="block bg-orange-400 px-2 py-1 font-bold rounded-lg"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
