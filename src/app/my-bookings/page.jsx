import Image from "next/image";
import React from "react";

const MyBookings = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="relative">
        <div className="absolute h-[250px] w-full bg-gradient-to-r from-[#00000099] to-[#00000000]"></div>
        <h2 className="text-2xl font-bold text-white absolute top-1/2 -translate-y-1/2 ms-6">
          Details of Bookings
        </h2>
        <Image
          className="h-[250px] object-cover"
          src={"/assets/images/about_us/parts.jpg"}
          alt="service image"
          width={1920}
          height={300}
        />
      </div>
    </div>
  );
};

export default MyBookings;
