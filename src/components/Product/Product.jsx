import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;
  return (
    <div className="card bg-base-100  shadow-xl my-3">
      <figure className="h-[180px]">
        <img src={product_image} alt={product_title} />
      </figure>
      <div className="card-body">
        <h2 className="text-[#ebeaf1] text-2xl font-semibold">
          {product_title}
        </h2>
        <p className="font-medium text-[#c1bed499] text-xl">Proce: {price}</p>
        <div className="card-actions justify-start mt-4">
          <Link to={`/Products/${product_id}`}>
            <button className="border border-[#9538E2] text-[#9538E2] px-6 py-3 rounded-[32px] text-lg font-semibold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
