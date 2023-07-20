import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../features/api/productApi";
import ProductCard from "../../components/cards/ProductCard";

const ViewProducts = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess } = useGetProductByIdQuery(id);
  if (isLoading || !isSuccess) {
    return (
      <div className="loadingSpinner h-screen w-screen bg-neutral_background flex justify-center items-center">
        <span class="loader"></span>
      </div>
    );
  }
  const product = data?.data?.product;
  return (
    <div className="container flex justify-center items-center">
      <ProductCard product={product} />
    </div>
  );
};

export default ViewProducts;
