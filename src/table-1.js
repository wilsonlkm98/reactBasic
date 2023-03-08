import React, { useState, useEffect } from "react";
import { Table } from "antd";

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
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(posts);

  return (
  <div>
    <h2>Refering Ant Design to do</h2>
    <br/>
    <Table columns={columns} dataSource={posts} />
  </div>
 );
};

export default TableDis1;
