import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredCardList,
  addToStoredFavoutiteList,
} from "../../utility/addtoLocal";
import { FaCartArrowDown } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";

const ProductDetails = () => {
  const { product_id: selectedid } = useParams();
  const id = parseInt(selectedid);
  const data = useLoaderData();
  const product = data.find((product) => parseInt(product.product_id) === id);
  console.log(product, data.product_id);
  const {
    product_id: currentId,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  const handleAddToCart = (id) => {
    addToStoredCardList(id);
  };
  const handleAddToFavourite = (id) => {
    addToStoredFavoutiteList(id);
  };
  return (
    <div>
      <div className="w-full py-24 bg-[#9538E2]">
        <div className="max-w-7xl mx-auto ">
          <h2 className="font-bold text-4xl text-white text-center">
            Product Details
          </h2>
          <p className="text-base text-white py-10 font-normal w-3/4 mx-auto text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      {/* Product Details goes from here */}
      <div className="card card-side shadow-xl max-w-7xl mx-auto lg:h-[680px] h-[1000px] p-8 bg-white rounded-[32px] -mt-28 flex-col lg:flex-row ">
        <figure className="lg:h-[500px] h-[450px] lg:w-[424px] w-full rounded-l-3xl mb-5 lg:mb-0 md:mb-0">
          <img
            className="h-full w-full rounded-3xl"
            src={product_image}
            alt={product_title}
          />
        </figure>

        <div className="flex flex-col justify-start ml-6 ">
          <h2 className="text-3xl font-semibold">{product_title}</h2>
          <div>
            <p className="text-xl text-[#09080F]/80 font-semibold py-3">
              Price: ${price}
            </p>
          </div>

          <div className="py-3">
            <button className="text-[14px] font-semibold text-[#309C08] px-4 rounded-[32px] py-3 bg-[#309C08]/30 border border-[#309C08]">
              {availability == true ? "Instock" : "Out of Stock"}
            </button>
          </div>
          <p className="font-normal text-lg text-[#09080F]/60">{description}</p>
          <div>
            <p className="text-lg text-[#09080F] font-bold py-2">
              Specification:
            </p>
            <ul>
              {specification.map((sp, index) => (
                <li
                  className="font-normal text-lg text-[#09080F]/60 py-1"
                  key={index}
                >
                  {sp}
                </li>
              ))}
            </ul>
          </div>
          <div className="my-3">
            <p className="text-lg font-bold text-[#09080F] mb-2">Rating:</p>

            <button className="px-6 py-1 rounded-[32px] bg-[#09080F]/5 text-sm font-medium text-[#09080F]/80 ">
              {rating}
            </button>
          </div>

          <div className="flex gap-3 mt-3">
            <button
              onClick={() => handleAddToCart(selectedid)}
              className="px-10 py-3 rounded-[32px] text-white bg-[#9538E2] text-lg font-bold flex gap-2 items-center justify-center"
            >
              Add to Card
              <FaCartArrowDown />
            </button>
            <button
              onClick={() => handleAddToFavourite(selectedid)}
              className="btn btn-circle"
            >
              <GiSelfLove />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
