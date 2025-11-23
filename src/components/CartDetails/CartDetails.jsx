import React from "react";

const CartDetails = ({ product }) => {
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
  return (
    <div className="max-w-6xl mx-auto items-start">
      <div className="bg-white shadow-sm rounded-xl flex flex-col lg:flex-row items-center justify-center gap-8 h-148 p-8 ">
        <div className="lg:w-2/6 w-full  text-start">
          <img
            className="lg:h-[250px] h-52  w-[100%] rounded-xl object-cover"
            src={product_image}
            alt=""
          />
        </div>
        <div className="w-5/6 flex justify-between">
          <div className="text-start items-start">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl text-[#09080F] font-semibold">
                {product_title}
              </h2>
              <div className="text-end">
                <button className="btn btn-circle btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <p className="text-[#09080F]/60 font-normal text-lg my-5">
              {description}
            </p>
            <p className="text-[#09080F]/80 font-bold text-2xl">
              Price:${price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
