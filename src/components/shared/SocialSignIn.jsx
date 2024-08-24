"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const SocialSignIn = () => {
  const session = useSession();
  const router = useRouter();

  const handleSocialLogin = async (provider) => {
    const resp = await signIn(provider, { redirect: false }); //no response
    console.log(resp);
  };

  if (session.status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="space-y-5 mt-5">
      <h4 className="text-center">Or Sign In with </h4>
      <div className=" flex justify-center items-center gap-8">
        <button
          onClick={() => handleSocialLogin("google")}
          className="text-3xl"
          title="Google Login"
        >
          <FcGoogle />
        </button>
        <button
          onClick={() => handleSocialLogin("github")}
          className="text-3xl"
          title="Github login"
        >
          <BsGithub />
        </button>
      </div>
    </div>
  );
};

export default SocialSignIn;
