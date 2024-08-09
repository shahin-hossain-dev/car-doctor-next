import React from "react";
import { services } from "@/lib/services";
import ServiceCard from "./Cards/ServiceCard";
const Services = () => {
  //   console.log(services);
  return (
    <div className="mt-24">
      <div className="w-1/2 text-center mx-auto">
        <h3 className="font-semibold text-primary">Our Services</h3>
        <h2 className="text-3xl font-semibold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
