import React from "react";
import Product from "./Product";

export default function Main(props) {
  const { products, onAdd, query } = props;
  return (
    <main className="block col-2 main">
      <h2>Produtos</h2>
      <div className="row">
        {console.log(query)}
        {products.filter((product) => {
          return products.name.toLocaleLowerCase().includes("Camisa 1".toLocaleLowerCase())
        })}
        {products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))}
        
      </div>
    </main>
  );
}
