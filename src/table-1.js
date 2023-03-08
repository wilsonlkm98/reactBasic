import React, { useState, useEffect } from "react";
import { Table, Input } from "antd";
import axios from 'axios';

const { Search } = Input;
const columns = [
  {
    title: "Post ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Body",
    dataIndex: "body",
    key: "body",
  },
];

const TableDis1 = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const newData = response.data.map((r, i) => {
        return { ...r, key: i };
      });
      
      setPosts(newData);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getData()
  }, []);

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const filteredData = posts.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <br />
      <Search
        placeholder="Search by title"
        onSearch={handleSearch}
        style={{ width: 200, marginBottom: 16 }}
      />
      <Table columns={columns} dataSource={filteredData} />
    </div>
  );
};

export default TableDis1;
