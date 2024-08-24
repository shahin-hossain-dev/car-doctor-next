"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SocialSignIn from "@/components/shared/SocialSignIn";
const Login = () => {
  const router = useRouter(); // for navigate /redirect another page

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (resp.status === 200) {
      router.push("/"); //navigate to home page
    }
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
          {/* social sign ing */}
          <SocialSignIn />
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
