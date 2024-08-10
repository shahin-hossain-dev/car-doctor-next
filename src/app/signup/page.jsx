import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const handleSignup = async (event) => {
    event.preventDefault();
  };
  return (
    <div className="container mx-auto mt-12 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        {/* image */}
        <div className="relative w-full h-[60vh]">
          <Image
            src={"/assets/images/login/login.svg"}
            fill
            alt="Login Image"
          />
        </div>
        {/* signup form */}
        <div className="border-2 p-12 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Sign Up
          </h2>
          <form className="space-y-3">
            <div>
              <label htmlFor="name" className="font-semibold">
                Full Name{" "}
              </label>{" "}
              <br />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Full Name"
                className="border outline-0 py-2 px-4 rounded-lg w-full mt-3"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-semibold">
                Email{" "}
              </label>{" "}
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="border outline-0 py-2 px-4 rounded-lg w-full mt-3"
              />
            </div>
            <div>
              <label htmlFor="password" className="font-semibold">
                Confirm Password{" "}
              </label>{" "}
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                className="border outline-0 py-2 px-4 rounded-lg w-full mt-3"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary w-full mt-3"
              />
            </div>
          </form>
          <div className="space-y-5 mt-5">
            <h4 className="text-center">Or Sign In with </h4>
            <div className=" flex justify-center items-center gap-8">
              <button className="text-3xl">
                <FcGoogle />
              </button>
              <button className="text-3xl">
                <BsGithub />
              </button>
            </div>
          </div>

          <p className="text-center mt-5">
            <small>
              Already have an account?{" "}
              <span className="font-semibold text-base text-primary">
                <Link href={"/login"}>Sign In </Link>
              </span>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
