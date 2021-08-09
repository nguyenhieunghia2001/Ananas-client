import React, { useEffect, useState } from "react";
import PurchaseItem from "./PurchaseItem";
import { getPurchase } from "../../api/PurchaseApi";

const purchase = {
  email: "",
  products: [],
  totalPrice: function () {
    return this.products?.reduce((result, item) => result + item.total(), 0);
  },
  totalQuantity: function () {
    return this.products?.reduce((result, item) => result + item.quantity, 0);
  },
  address: {},
  status: "",
};
const PurchaseList = () => {
  const [purchases, setPurchase] = useState(purchase);
  useEffect(() => {
    async function fetch() {
      const data = await getPurchase();
      setPurchase(data.purchases);
    }
    fetch();
  }, []);
  return (
    <div className="purchase__list">
      {purchases &&
        Array.isArray(purchases) &&
        purchases.map((purchase) => <PurchaseItem purchase={purchase} key={purchase?._id} />)}
    </div>
  );
};

export default PurchaseList;
