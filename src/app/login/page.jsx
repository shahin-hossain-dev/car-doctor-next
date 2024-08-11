"use client";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { signIn } from "next-auth/react";
const Login = () => {
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    const resp = signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(resp);
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
        {/* login form */}
        <div className="border-2 p-12 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
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
                Password{" "}
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
                value="Sign In"
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
              Don&apos;t have an account?{" "}
              <span className="font-semibold text-base text-primary">
                <Link href={"/signup"}>Sign Up </Link>
              </span>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
