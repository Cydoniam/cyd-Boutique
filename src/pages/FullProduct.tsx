import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const FullProduct: React.FC = () => {
  const [product, setProduct] = React.useState<{
    imageUrl: string;
    name: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          "https://63370fc865d1e8ef26793518.mockapi.io/products/" + id
        );
        setProduct(data);
      } catch (error) {
        alert("Product is not find");
        navigate("/");
      }
    }

    fetchProduct();
  }, []);

  if (!product) {
    return <>Loading...</>;
  }

  return (
    <div className="container">
      <img src={product.imageUrl} />
      <h2>{product.name}</h2>
      <p>{product.title}</p>
      <h4>{product.price}₽</h4>
    </div>
  );
};

export default FullProduct;
