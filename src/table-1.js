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
  const getData = async () =>{
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts").then(a => a.json())
      let newData = response.map((r,i) => {
        return {...r,key:i}
      })
      console.log(newData);
      setPosts(newData)
    }
    catch (error) {
      console.log(error);
    }
  }
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    getData()
  }, []);

  return (
    <div>
      <h2>Refering Ant Design to do</h2>
      <br />
      <Table columns={columns} dataSource={posts} />
    </div>
  );
};

export default TableDis1;
