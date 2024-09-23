import React, { useEffect } from "react";
import ProductsList from "../components/ProductsList";
import { AppDispatch, RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../app/action/productAction";

export default function ProductsListContainer() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return <ProductsList allProducts={data} />;
}
