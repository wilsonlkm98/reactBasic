import { useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  return (
    <div className="home">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}
 
export default Blog;

/*

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
      //console.log(newData);
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



const columns = [
  {
    title: "No.",
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
    render: (text) => {
      const paragraphs = text.split("\n");
      return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
    },
  },
];

const TableDis1 = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setData(data);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <br />
      <br />
      <Search
        placeholder="Search by title"
        onSearch={handleSearch}
        style={{ width: 200, marginBottom: 16 }}
      />
      <Table
        dataSource={filteredData}
        columns={columns}
        rowKey={(record) => record.id}
      />
    </div>
  );
};

*/