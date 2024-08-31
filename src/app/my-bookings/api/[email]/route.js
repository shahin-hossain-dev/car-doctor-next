import { connectDB } from "@/lib/connectDB";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = await db.collection("bookings");

  try {
    const bookings = await bookingsCollection
      .find({ email: params.email })
      .toArray();
    return Response.json(bookings);
  } catch (error) {
    console.log(error);
  }
};
