"use client"; //navbar all time client component hobe
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const { data: session, status } = useSession();
  console.log(status);
  return (
    <div className="bg-base-100">
      <div className="navbar container mx-auto text-black">
        <div className="navbar-start">
          <Link href={"/"}>
            <Image
              src={"/assets/logo.svg"}
              height={60}
              width={100}
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-4 font-semibold">
            {navItems.map((nav, idx) => (
              <Link
                href={nav.path}
                key={idx}
                className="hover:text-primary duration-300"
              >
                {nav.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="navbar-end flex gap-3">
          <div>
            <IoCartOutline className="text-xl" />
          </div>
          <div>
            <IoSearch className="text-xl" />
          </div>
          <button className="btn btn-outline btn-primary">Appointment</button>
          <div>
            {session && (
              <Image
                src={session?.user?.image}
                alt={session?.user?.name}
                height={50}
                width={50}
                className="rounded-full"
              />
            )}
          </div>
          <div>
            {status === "loading" && (
              <button className="btn btn-primary">Loading...</button>
            )}

            {status === "authenticated" && (
              <button onClick={() => signOut()} className="btn btn-primary">
                Logout
              </button>
            )}
            {status === "unauthenticated" && (
              <Link href={"/login"} className="btn btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
];
export default Navbar;
