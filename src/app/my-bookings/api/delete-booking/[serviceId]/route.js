import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const bookingCollection = await db.collection("bookings");
  console.log(params.serviceId);
  try {
    const resp = await bookingCollection.deleteOne({
      _id: new ObjectId(params.serviceId),
    });
    return Response.json({ message: "deleted successfully", response: resp });
  } catch (error) {
    return Response.json({ message: "Something went wrong" });
  }
};
