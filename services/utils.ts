const baseUrl = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  const res = await fetch(`${baseUrl}/products`);
  return await res.json();
};
export const fetchProduct = async (id: number) => {
  const res = await fetch(`${baseUrl}/products/${id}`);
  return await res.json();
};
