import React, { useState } from 'react';

function CategorySelect({ products, onFilter }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories from products list
  const categories = ['All', ...new Set(products.map(product => product.category))];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    onFilter(event.target.value === 'All' ? null : event.target.value);
  }

  return (
    <div>
      <label htmlFor="category-select">Filter by Category:</label>
      <select id="category-select" value={selectedCategory} onChange={handleCategoryChange}>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelect;