export const getServices = async () => {
  const res = await fetch("http://localhost:3000/services/api/get-all");
  const data = res.json();
  return data;
};

export const getServiceDetails = async (serviceId) => {
  const res = await fetch(`http://localhost:3000/services/api/${serviceId}`);
  const data = res.json();
  return data;
};
