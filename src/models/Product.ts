export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  picture: string;
  createdAt: string;
  updatedAt: string;
  imageUrl: string;
}

export const defaultProduct: Product = {
  id: 0,
  name: "",
  description: "",
  price: 0,
  picture: "",
  createdAt: "",
  updatedAt: "",
  imageUrl: "",
};
