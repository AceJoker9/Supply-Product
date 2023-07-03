import React, { useState } from "react";
import "./App.css";
import data from "./data/data.json";
import SortProducts from './SortProducts';
import CategorySelect from "./CategorySelect";
import ProductCard from "./ProductComponent";

function App() {
  const [allProducts, setAllProducts] = useState(data);

  const handleSortProducts = (sortFunction) => {
    const sortedProducts = [...allProducts.products].sort(sortFunction);
    setAllProducts({ products: sortedProducts });
  };

  const handleFilterProducts = (category) => {
    if (category) {
      const filteredProducts = data.products.filter((product) => product.category === category);
      setAllProducts({ products: filteredProducts });
    } else {
      setAllProducts(data);
    }
  };

  return (
    <div>
      <header>
        <h1>One Stop Shop</h1>
      </header>
      <main>
        <div className="sort-and-filter">
          <SortProducts products={allProducts.products} onSort={handleSortProducts} />
          <CategorySelect products={allProducts.products} onFilter={handleFilterProducts} />
        </div>
        <div className="grid-container">
          {allProducts.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <footer>
        This is the footer
      </footer>
    </div>
  );
}

export default App;
