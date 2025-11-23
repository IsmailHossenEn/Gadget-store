import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("./ProductsData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const uniqueCategories = [
          "All",
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  return (
    <div className="">
      <h2 className="text-4xl text-[#0B0B0B] font-bold text-center py-16">
        Explore Cutting edge gadgets{" "}
      </h2>
      <div className="flex md:flex-col flex-col lg:flex-row gap-5  rounded-md">
        <div
          className="flex lg:flex-col lg:gap-6 gap-3 items-start justify-start lg:w-1/4 flex-wrap h-fit py-8 px-5 bg-white rounded-lg "
          value={selectedCategory}
        >
          {categories.map((category) => (
            <button
              className="bg-[#09080F0D]/10 px-7 py-4 rounded-[32px] text-[#09080F99] hover:bg-[#9538E2] hover:text-white"
              key={category}
              value={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="w-4/4 px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
            {filteredProducts.map((product) => (
              <Product key={product.product_id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
