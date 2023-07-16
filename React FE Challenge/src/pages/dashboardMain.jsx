import { Table } from "../components/table/table";
import React from "react";
import { useGetProductsQuery } from "../features/api/productApi";
import { data } from "autoprefixer";

const DashboardMain = () => {
  const { data, isLoading, isError, isSuccess } = useGetProductsQuery();
  if (isLoading || !isSuccess) {
    return (
      <div className="loadingSpinner h-screen w-screen bg-neutral_background">
        <span class="loader"></span>
      </div>
    );
  }
  const { products } = data?.data;
  return <Table products={products} />;
};

export default DashboardMain;
