import React, { useState } from 'react';

const SearchFilter = () => {
  const items = ['Apple', 'Banana', 'Grapes', 'Orange', 'Pineapple','Mango','Blackberry','Kivi','Watermelon'];
  const [search, setSearch] = useState('');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
