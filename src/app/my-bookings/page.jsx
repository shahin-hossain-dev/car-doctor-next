"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MyBookings = () => {
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const session = useSession();
  const userEmail = session?.data?.user?.email;

  const booking = async () => {
    const res = await fetch(
      `http://localhost:3000/my-bookings/api/${userEmail}`
    );
    const data = await res.json();
    setBookings(data);
    setLoading(false);
  };

  useEffect(() => {
    booking();
  }, [session]);

  return (
    <div className="w-10/12 mx-auto">
      <div className="relative">
        <div className="absolute h-[250px] w-full bg-gradient-to-r from-[#00000099] to-[#00000000]"></div>
        <h2 className="text-2xl font-bold text-white absolute top-1/2 -translate-y-1/2 ms-6">
          My Bookings
        </h2>
        <Image
          className="h-[250px] object-cover"
          src={"/assets/images/about_us/parts.jpg"}
          alt="service image"
          width={1920}
          height={300}
        />
      </div>

      {/* table */}
      <div>
        <div className="overflow-x-auto">
          {loading ? (
            <div className="text-center mt-3">Loading...</div>
          ) : (
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Service Name</th>
                  <th>Price </th>
                  <th>Booking Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* booking row */}

                {bookings?.map(({ _id, serviceTitle, price, date }, idx) => (
                  <tr key={_id} className="bg-base-200">
                    <th>{idx + 1}</th>
                    <td>{serviceTitle}</td>
                    <td>${price}</td>
                    <td>{date}</td>
                    <td>
                      <div className="flex flex-wrap gap-3">
                        <button className="btn btn-warning btn-sm ">
                          Edit
                        </button>
                        <button className="btn btn-error btn-sm ">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
