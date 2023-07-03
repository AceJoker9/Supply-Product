import React, { useState} from 'react';
import Product from './ProductComponent';
import SortProducts from './SortProducts';
import CategorySelect from './CategorySelect';

const ProductListing = ({ products }) => {
  const [sortingFunction, setSortingFunction] = useState(null);
  const [filteringFunction, setFilteringFunction] = useState(null);

  const handleSort = (sortingFunction) => {
    setSortingFunction(sortingFunction);
  };

  const handleFilter = (category) => {
    if (category === null) {
      setFilteringFunction(null);
    } else {
      setFilteringFunction((product) => product.category === category);
    }
  };

  const filteredProducts = filteringFunction ? products.filter(filteringFunction) : products;
  const sortedProducts = sortingFunction ? [...filteredProducts].sort(sortingFunction) : filteredProducts;

  return (
    <div className="product-listing">
      <SortProducts products={products} onSort={handleSort} />
      <CategorySelect products={products} onFilter={handleFilter} />
      {sortedProducts.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;