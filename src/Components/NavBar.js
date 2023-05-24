import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../image/logo-1.png";
import { useState } from "react";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <div className="text-white bg-black">
      <nav className="flex justify-between items-center px-5">
        <Link href={"/"}>
          <Image className="h-16 w-16" src={logo} alt="img" />
        </Link>
        <div className="hidden md:flex space-x-5 items-center font-bold">
          <Link href={"/"} className="hover:text-orange-400 font-extrabold">Home</Link>
          <Link href={"/experience"} className=" hover:text-orange-400">  Experience</Link>
          <Link href={"/contactme"} className="hover:text-orange-400 font-bold">Contact Me</Link>
          <Link href={"/projects"} className="hover:text-font-bold">Projects</Link>
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
              <Link href={"/"} className="block py-2 hover:text-orange-400">Home</Link>
              <Link href={"/experience"} className="block py-2 hover:text-orange-400">Experience</Link>
              <Link href={"/contactme"} className="block py-2 hover:text-orange-400">Contact Me</Link>
              <Link href={"/projects"} className="block py-2 hover:text-orange-400">Projects</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
