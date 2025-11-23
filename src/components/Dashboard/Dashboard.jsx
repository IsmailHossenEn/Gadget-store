import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import HeadingConponent from "../HeadingCom/HeadingConponent";
import { getStoredCardList } from "../../utility/addtoLocal";
import { useLoaderData } from "react-router-dom";

import CartDetails from "../CartDetails/CartDetails";

const Dashboard = () => {
  const [cartproducts, setCartproducts] = useState([]);
  const allProducts = useLoaderData();

  useEffect(() => {
    const getStoredList = getStoredCardList();
    const storedListInt = getStoredList.map((id) => parseInt(id));

    const cartList = allProducts.filter((product) =>
      storedListInt.includes(product.product_id)
    );

    setCartproducts(cartList);
  }, [allProducts]);

  const handleSort = (sortType) => {
    if (sortType === "price") {
      const sortedProductsList = [...cartproducts].sort(
        (a, b) => b.price - a.price
      );
      setCartproducts(sortedProductsList);
    }
  };

  return (
    <div className="pb-28">
      <HeadingConponent />
      <div className="max-w-7xl mx-auto items-center">
        <Tabs className="text-center">
          <TabList className="flex items-center justify-center gap-5 mt-10">
            <Tab className="text-base font-semibold border-2 border-[#9538E2] hover:border-white hover:bg-white text-[#9538E2] shadow-lg rounded-[32px] px-5 py-3 cursor-pointer">
              Cart
            </Tab>
            <Tab className="text-base font-semibold border-2 border-[#9538E2] hover:border-white hover:bg-white text-[#9538E2] shadow-lg rounded-[32px] px-5 py-3 cursor-pointer">
              WishList
            </Tab>
          </TabList>

          <TabPanel>
            <div className="max-w-6xl mx-auto py-4">
              <div className="flex flex-col lg:flex-row md:flex-row px-5 items-center justify-between py-5">
                <h2 className="font-bold text-2xl text-[#0B0B0B]">Cart</h2>
                <div className="flex flex-col lg:flex-row md:flex-row pb-7 lg:pb-0 md:pb-0 items-center justify-end gap-7">
                  <p className="text-[#0B0B0B] text-xl font-bold">
                    Total Cost: $
                    {cartproducts.reduce((sum, p) => sum + p.price, 0)}
                  </p>
                  <div className="flex gap-4">
                    <button
                      className="font-semibold text-lg text-[#9538E2] px-5 py-3 border border-[#9538E2] rounded-2xl hover:bg-[#9538E2] hover:text-white"
                      onClick={() => handleSort("price")}
                    >
                      Sort by price
                    </button>
                    <button className="font-medium text-base hover:text-[#9538E2] px-5 py-3 border hover:border-[#9538E2] rounded-2xl bg-[#9538E2] hover:bg-white text-white">
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
              <div>
                {cartproducts.length > 0 ? (
                  cartproducts.map((prodct) => (
                    <CartDetails key={prodct.product_id} product={prodct} />
                  ))
                ) : (
                  <p>No products in the cart.</p>
                )}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
