import { toast } from "react-toastify";

const getStoredCardList = () => {
  // read-list
  const storedListStr = localStorage.getItem("CartList");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredCardList = (id) => {
  const storedList = getStoredCardList();
  if (storedList.includes(id)) {
    // already exists. do not add it
    toast("already exists in the Cart list");
    console.log(id, "");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("CartList", storedListStr);
    // ideally trigger toast from the component
    toast("This book is added to your Cart list.");
  }
};

const getStoredFavouriteList = () => {
  // read-list
  const storedWishListStr = localStorage.getItem("wish-list");
  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

const addToStoredFavoutiteList = (id) => {
  const storedWishList = getStoredFavouriteList();
  if (storedWishList.includes(id)) {
    // already exists. do not add it
    toast("already exists in the Cart list");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
  }
};

export { addToStoredFavoutiteList, getStoredCardList, addToStoredCardList };
