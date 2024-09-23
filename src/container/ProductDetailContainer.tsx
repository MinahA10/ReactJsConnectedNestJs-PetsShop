import React, { useEffect } from "react";
import ProductDetail from "../components/ProductDetail";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { getDetailProduct } from "../app/action/productAction";
import { resetSelectedProduct } from "../app/reducer/productReducer";

export default function ProductDetailContainer() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { selectedProduct, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    console.log("Fetched ID: ", id);
    dispatch(resetSelectedProduct());
    if (id) {
      dispatch(getDetailProduct(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return <ProductDetail productDetail={selectedProduct} />;
}
