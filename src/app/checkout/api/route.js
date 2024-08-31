import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const booking = await request.json();
  const db = await connectDB();
  const bookingsCollection = await db.collection("bookings");
  try {
    const resp = await bookingsCollection.insertOne(booking);
    return Response.json({ message: "Booking added successfully" });
  } catch (error) {
    console.log(error);
  }
};
