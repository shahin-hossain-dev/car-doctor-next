import { getServiceDetails } from "@/services/getServices";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// for heading title
export const metadata = {
  title: "Details",
  description: "Service Details Page",
};

const ServiceDetails = async ({ params }) => {
  const { service } = await getServiceDetails(params.serviceId);
  const { _id, title, img, price, description, facility } = service;

  return (
    <div className=" w-10/12 mx-auto">
      <div className="relative">
        <div className="absolute h-[250px] w-full bg-gradient-to-r from-[#00000099] to-[#00000000]"></div>
        <h2 className="text-2xl font-bold text-white absolute top-1/2 -translate-y-1/2 ms-6">
          Details of {title}
        </h2>
        <Image
          className="h-[250px] object-cover"
          src={img}
          alt="service image"
          width={1920}
          height={300}
        />
      </div>
      <div className="mt-3">
        <h2 className="text-3xl font-medium">{title}</h2>
        <p>{description}</p>
      </div>
      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 col-span-3">
          {facility.map((facility, idx) => (
            <div
              key={idx}
              className=" border-t-4 rounded-lg border-t-primary p-6 bg-red-100"
            >
              <h2 className="text-xl font-medium mb-3">{facility.name}</h2>
              <p>{facility.details}</p>
            </div>
          ))}
        </div>
        <div className="col-span-1">
          <Image
            src={img}
            alt="image"
            width={500}
            height={500}
            className="w-full h-[150px] object-cover rounded-md"
          />
          <h3 className="text-2xl font-bold mt-3 text-primary">
            Price: ${price}
          </h3>
          <Link href={`/checkout/${_id}`}>
            <button className="btn btn-primary w-full mt-3">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
