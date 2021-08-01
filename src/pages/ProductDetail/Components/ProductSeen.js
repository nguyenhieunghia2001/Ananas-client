import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import ProductCarousel from "../../../components/Product/ProductCarousel";
import { getProductByEmail } from "../../../api/historyApi";
import "../style.scss";

const ProductSeen = ({ productId }) => {
  const [history, setHistory] = useState();
  useEffect(() => {
    async function fetch() {
      const fetchData = await getProductByEmail();
      setHistory(fetchData?.data?.products);
    }
    fetch();
  }, []);

  return (
    <div className="products-seen detail-space">
      <Container>
        <div className="products-seen--title">
          <h4>SẢN PHẨM ĐÃ XEM</h4>
        </div>
        {history && <ProductCarousel products={history} />}
      </Container>
    </div>
  );
};

export default ProductSeen;
