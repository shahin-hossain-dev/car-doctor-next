import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const booking = await request.json();
  const db = await connectDB();
  const bookingsCollection = await db.collection("bookings");
  try {
    const resp = await bookingsCollection.insertOne(booking);
    console.log(resp);
    return Response.json({
      message: "Booking added successfully",
      status: 200,
    });
  } catch (error) {
    console.log(error);
  }
};
