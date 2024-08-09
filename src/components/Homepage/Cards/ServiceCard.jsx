import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl p-5">
      <figure>
        <Image width={430} height={120} src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold text-primary">
            Price: ${parseInt(price)}
          </p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
