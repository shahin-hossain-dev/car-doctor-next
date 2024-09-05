import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

const connectBooking = async () => {
  const db = await connectDB();
  return await db.collection("bookings");
};

export const DELETE = async (request, { params }) => {
  const bookingCollection = await connectBooking();
  try {
    const resp = await bookingCollection.deleteOne({
      _id: new ObjectId(params.serviceId),
    });
    return Response.json({ message: "deleted successfully", response: resp });
  } catch (error) {
    return Response.json({ message: "Something went wrong" });
  }
};

// export const PATCH = async (request, { params }) => {
//   const bookingCollection = await connectBooking();
//   const serviceId = await params.serviceId;

//   const filter = { _id: new ObjectId(serviceId) };
//   const updateDoc = request.json();
//   const option = { upsert: true };

//   try {
//     const resp = await bookingCollection.updateOne(filter, updateDoc, option);
//     return Response.json({ message: "updated successfully", response: resp });
//   } catch (error) {
//     return Response.json({ message: "Something went wrong" });
//   }
// };

export const GET = async (request, { params }) => {
  const serviceId = await params.serviceId;
  const bookingCollection = await connectBooking();

  try {
    const resp = await bookingCollection.findOne({
      _id: new ObjectId(serviceId),
    });
    return Response.json(resp);
  } catch (error) {
    return Response.json({ message: "something went wrong" });
  }
};
