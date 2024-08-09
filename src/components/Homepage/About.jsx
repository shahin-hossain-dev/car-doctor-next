import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-[60vh] mt-24">
      <div className="relative ">
        <div style={{ width: "90%", height: "90%", position: "relative" }}>
          <Image
            src={"/assets/images/about_us/person.jpg"}
            fill
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="about-us"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="w-[50%] h-[50%] border-[10px] rounded-xl border-white absolute bottom-0 right-0">
          <Image
            src={"/assets/images/about_us/parts.jpg"}
            fill
            alt="parts"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-primary font-semibold">About Us</h2>
        <h2 className="text-xl lg:text-3xl font-semibold">
          We are qualified & of experience in this field
        </h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.{" "}
        </p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.{" "}
        </p>
        <button className="btn btn-primary text-white">Get More Info</button>
      </div>
    </div>
  );
};

export default About;
