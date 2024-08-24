import { connectDB } from "@/lib/connectDB";
import { services } from "@/lib/services";

export const GET = async () => {
  try {
    const db = await connectDB();
    const servicesCollection = db.collection("services");
    await servicesCollection.deleteMany();
    const resp = await servicesCollection.insertMany(services);
    return Response.json({ message: "Seed Successfully" });
  } catch (error) {
    console.log(error);
  }
};
