import { connectDB } from "@/lib/connectDB";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const servicesCollection = await db.collection("services");
  try {
    const query = { _id: params.serviceId };
    const service = await servicesCollection.findOne(query);
    return Response.json({ service });
  } catch (error) {
    console.log(error);
  }
};
