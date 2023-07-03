import React, { useState} from 'react';


const SortProducts = ({ products, onSort }) => {
  const [sortOrder, setSortOrder] = useState('ascending');

  const handleSort = () => {
    if (sortOrder === 'ascending') {
      onSort((a, b) => a.title.localeCompare(b.title));
      setSortOrder('descending');
    } else {
      onSort((a, b) => b.title.localeCompare(a.title));
      setSortOrder('ascending');
    }
  };

  return (
    <div className="sort-products">
      <button onClick={handleSort}>Sort by name {sortOrder === 'ascending' ? 'A-Z' : 'Z-A'}</button>
    </div>
  );
};

export default SortProducts;