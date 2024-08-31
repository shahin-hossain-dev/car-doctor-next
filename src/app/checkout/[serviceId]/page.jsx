"use client";
import { getServiceDetails } from "@/services/getServices";
import { useSession } from "next-auth/react";

import Image from "next/image";
import { useEffect, useState } from "react";

const Checkout = ({ params }) => {
  const [service, setService] = useState({});
  const { data } = useSession();

  console.log(data);
  useEffect(() => {
    const getServices = async () => {
      const serviceDetails = await getServiceDetails(params.serviceId);
      setService(serviceDetails);
    };
    getServices();
  }, [params.serviceId]);

  const { img, price } = service.service || {};

  return (
    <div className="w-10/12 mx-auto">
      <div className="relative">
        <div className="absolute h-[250px] w-full bg-gradient-to-r from-[#00000099] to-[#00000000]"></div>
        <h2 className="text-2xl lg:text-3xl font-bold text-white absolute top-1/2 -translate-y-1/2 ms-6">
          Checkout
        </h2>
        <Image
          className="h-[250px] object-cover"
          src={img}
          alt="service image"
          width={1920}
          height={300}
        />
      </div>
      {/* checkout form */}
      <div className="bg-slate-200 mt-12 rounded-md p-3 lg:p-12">
        <form>
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Full Name"
              defaultValue={data?.user?.name}
              className="border p-2 border-slate-700 outline-slate-700 rounded-md w-full"
            />
            <input
              type="date"
              defaultValue={new Date().toISOString().substring(0, 10)}
              className="border p-2 border-slate-700 outline-slate-700 rounded-md w-full"
            />
          </div>
          <div className="flex gap-5 mt-6">
            <input
              type="email"
              placeholder="email@example.com"
              defaultValue={data?.user?.email}
              className="border p-2 border-slate-700 outline-slate-700 rounded-md w-full"
            />
            <input
              type="text"
              defaultValue={price}
              className="border p-2 border-slate-700 outline-slate-700 rounded-md w-full"
            />
          </div>
          <div className="flex gap-5 mt-6">
            <input
              type="text"
              placeholder="Your Phone"
              className="border p-2 border-slate-700 outline-slate-700 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Present Address"
              className="border p-2 border-slate-700 outline-slate-700 rounded-md w-full"
            />
          </div>
          <input
            type="submit"
            value="Order Confirm"
            className="btn btn-primary btn-block mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
