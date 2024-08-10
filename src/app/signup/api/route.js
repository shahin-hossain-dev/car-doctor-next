import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const newUser = await request.json();

  try {
    const db = await connectDB();
    const usersCollection = await db.collection("users");
    const exists = await usersCollection.findOne({ email: newUser.email });
    if (exists) {
      return Response.json({ message: "User Already Exist" }, { status: 304 });
    }
    const resp = await usersCollection.insertOne(newUser);
    return Response.json({ message: "User Created" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Something went wrong", error },
      {
        status: 500,
      }
    );
  }
};
