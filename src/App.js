import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data/data.json";
import SortProducts from './SortProducts';
import CategorySelect from "./CategorySelect";
import ProductCard from "./ProductComponent";
import "./SupplyPix/fragrance-1.jpg";
import "./SupplyPix/images (1).jpg";
import "./SupplyPix/laptop-1.jpg";
import "./SupplyPix/skin-care-1.jpg";
import "./SupplyPix/style-1.jpg";

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

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      // Rotate the slideshow logic here
    }, 3000); // Adjust the interval time (in milliseconds) as needed

    return () => {
      clearInterval(slideshowInterval);
    };
  }, []);

  return (
    <div>
      <header>
        <div className="slideshow">
          <img src="./SupplyPix/fragrance-1.jpg" alt=" 1" />
          <img src="./SupplyPix/images (1).jpg" alt=" 2" />
          <img src="laptop-1.jpg" alt=" 3" />
          <img src="/skin-care-1.jpg" alt=" 3" />
          <img src="/style-1.jpg" alt=" 3" />
        </div>
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
