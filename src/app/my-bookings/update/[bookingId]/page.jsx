"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateBooking = ({ params }) => {
  const { data } = useSession();
  const [booking, setBooking] = useState({});
  const bookingId = params.bookingId;
  const { phone, price, address, date } = booking;
  console.log(booking);
  const handleUpdateBooking = async (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const address = form.address.value;
    const date = form.date.value;

    const updateInfo = {
      phone,
      address,
      date,
    };

    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/booking/${bookingId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateInfo),
        }
      );
      const data = await resp.json();
      if (data?.response?.modifiedCount > 0) {
        toast.success("Order Updated");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // fetch for delete data through id

  // fetch id data
  useEffect(() => {
    const loadBooking = async () => {
      const res = await fetch(
        `http://localhost:3000/my-bookings/api/booking/${bookingId}`
      );
      const data = await res.json();
      setBooking(data);
    };

    loadBooking();
  }, [bookingId]);

  return (
    <div className="w-10/12 mx-auto">
      <div className="relative">
        <div className="absolute h-[250px] w-full bg-gradient-to-r from-[#00000099] to-[#00000000]"></div>
        <h2 className="text-2xl lg:text-3xl font-bold text-white absolute top-1/2 -translate-y-1/2 ms-6">
          Update Bookings
        </h2>
        <Image
          className="h-[250px] object-cover object-top"
          src={"/assets/images/banner/3.jpg"}
          alt="service image"
          width={1920}
          height={300}
        />
      </div>
      {/* checkout form */}
      {!booking._id && (
        <h2 className="text-center mt-12 font-medium text-primary">
          Loading...
        </h2>
      )}
      {booking._id && (
        <div className="bg-slate-200 mt-12 rounded-md p-3 lg:p-12">
          <form onSubmit={handleUpdateBooking}>
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Full Name"
                readOnly
                defaultValue={data?.user?.name}
                className="border p-2 border-slate-700 outline-slate-700 rounded-md w-full"
              />
              <input
                type="date"
                name="date"
                defaultValue={date}
                className="border p-2 border-slate-700 outline-slate-700 rounded-md w-full"
              />
            </div>
            <div className="flex gap-5 mt-6">
              <input
                type="email"
                readOnly
                placeholder="email@example.com"
                defaultValue={data?.user?.email}
                className="border p-2 border-slate-700 outline-slate-700 rounded-md w-full"
              />
              <input
                type="text"
                readOnly
                defaultValue={price && `$${price}`}
                className="border p-2 border-slate-700 outline-slate-700 rounded-md w-full"
              />
            </div>
            <div className="flex gap-5 mt-6">
              <input
                type="text"
                placeholder="Your Phone"
                name="phone"
                defaultValue={phone}
                className="border p-2 border-slate-700 outline-slate-700 rounded-md w-full"
              />
              <input
                type="text"
                name="address"
                defaultValue={address}
                placeholder="Present Address"
                className="border p-2 border-slate-700 outline-slate-700 rounded-md w-full"
              />
            </div>
            <input
              type="submit"
              value="Update Order"
              className="btn btn-primary btn-block mt-5"
            />
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default UpdateBooking;
