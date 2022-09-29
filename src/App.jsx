import React from "react";
import "./scss/app.scss";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import ProductBlock from "./components/ProductBlock";

import products from "./assets/products.json";

function App() {
  return (
    <div className="section-inner">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All products</h2>
          <div className="content__items">
            {products.map((obj) => (
              <ProductBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
