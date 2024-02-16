import type { CartItem } from "./cartStore";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface User {
  id: number;
}

export interface Cart {
  items: Array<{
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }>;
}

async function get<T>(
  incomingReq: Request,
  endpoint: string,
  cb: (response: Response) => Promise<T>
): Promise<T> {
  const origin = new URL(incomingReq.url).origin;
  const response = await fetch(`${origin}${endpoint}`, {
    credentials: "same-origin",
    headers: incomingReq.headers,
  });
  if (!response.ok) {
    // TODO make this better...
    throw new Error("Fetch failed");
  }
  return cb(response);
}

export async function getProducts(incomingReq: Request): Promise<Product[]> {
  return get<Product[]>(incomingReq, "/api/products", async (response) => {
    const products: Product[] = await response.json();
    return products;
  });
}

export async function getProduct(
  incomingReq: Request,
  id: number
): Promise<Product> {
  return get<Product>(incomingReq, `/api/products/${id}`, async (response) => {
    const product: Product = await response.json();
    return product;
  });
}

export async function getUser(incomingReq: Request): Promise<User> {
  return get<User>(incomingReq, `/api/user`, async (response) => {
    const user: User = await response.json();
    return user;
  });
}

export async function getCart(incomingReq: Request): Promise<Cart> {
  return get<Cart>(incomingReq, `/api/cart`, async (response) => {
    const cart: Cart = await response.json();
    return cart;
  });
}

export async function addToUserCart(product: CartItem): Promise<void> {
  await fetch(`${location.origin}/api/cart`, {
    credentials: "same-origin",
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      Cache: "no-cache",
    },
    body: JSON.stringify(product),
  });
}
