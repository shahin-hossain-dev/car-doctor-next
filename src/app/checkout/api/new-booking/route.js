import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const db = await connectDB();
  const bookingCollection = await db.collection("bookings");
  const newBooking = await request.json();

  try {
    const resp = await bookingCollection.insertOne(newBooking);
    return Response.json(
      { message: "new booking added successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "Something went wrong" }, { status: 400 });
  }
};
