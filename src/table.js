import React, { useState, useEffect } from 'react';

function Table() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Free information API provided by ChatGPT
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Item List</h1>
      <div>
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
