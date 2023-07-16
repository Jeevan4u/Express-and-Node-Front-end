import React from "react";
import shoes from "../../assets/images/shoe.jpg";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-4">
      <figure className="px-10 pt-10">
        <img src={shoes} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
      <div className="card-actions justify-start">
        <div className="badge badge-outline">{product.category}</div>
        <div className="badge badge-outline">Products</div>
      </div>
      <div className="PriceTag py-4">
        <p>Price : ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
