import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();
  console.log("data", data);
  return data;
};

function Reactquery() {
  const [count, setCount] = useState(0);
  const { data, error, isLoading, refetch } = useQuery(
    "products",
    fetchProducts,
    {
      enabled: false,
    }
  );

  useEffect(() => {
    if (count % 5 == 0 && count !== 0) {
      refetch();
    }
  }, [count]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>add</button>
      <h1 style={{ textAlign: "center", color: "#333" }}>
        Products Using React Query
      </h1>
      {count % 5 === 0 && count !== 0 && (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {data &&
            data.map((product) => (
              <li
                key={product.id}
                style={{
                  border: "1px solid #ddd",
                  margin: "10px 0",
                  padding: "10px",
                  borderRadius: "5px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <p>
                  <strong>Category:</strong> {product.category}
                </p>
                <p>
                  <strong>Description:</strong> {product.description}
                </p>
                <p>
                  <strong>ID:</strong> {product.id}
                </p>
                <img src={product.image} alt={product.title} width={50} />
                <p>
                  <strong>Price:</strong> ${product.price}
                </p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Reactquery;
