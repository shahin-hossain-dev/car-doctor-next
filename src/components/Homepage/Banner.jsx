import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full ">
      {banners.map((banner, idx) => (
        <div
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(7,25,80, 0.7), rgba(0,0,0, 0.3)), url('/assets/images/banner/${
              idx + 1
            }.jpg')`,
          }}
          key={idx}
          id={`slide${idx + 1}`}
          className="carousel-item relative w-full h-[90vh] rounded-2xl bg-no-repeat bg-cover"
        >
          <div className="text-white space-y-3 absolute left-32 w-1/2 right-10 top-1/2  -translate-y-1/2">
            <h2 className="text-6xl font-semibold">{banner.title}</h2>
            <p>{banner.description}</p>
            <div className="space-x-3">
              <button className="btn btn-primary text-white">
                Discover More
              </button>
              <button className="btn btn-secondary btn-outline">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute bottom-12 right-12 space-x-3 transform justify-between">
            <a href={banner.prev} className="btn btn-circle">
              ❮
            </a>
            <a href={banner.next} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
];
export default Banner;
