import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import dataBlog from "./dataBlog";
import InputGroup from "react-bootstrap/InputGroup";
import "./Blog.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Fade from "react-reveal/Fade";

const Blog = ({ img, time, description, title, link }) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Navbar />
      <Fade bottom>
        <InputGroup className="box">
          <Form.Control
            className="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="What are you looking for?"
          />
        </InputGroup>

        <div className="posts">
          {dataBlog
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search);
            })
            .map((item, index) => {
              return (
                <div className="post">
                  <img className="postImg" src={item.img} alt="" />
                  <div className="postInfo">
                    <a href={item.link} target="blank">
                      <span className="postTitle">{item.title}</span>
                    </a>
                    <hr />
                    <p className="postDesc">{item.description}</p>
                    <span className="postDate">{item.time}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </Fade>
      <Footer />
    </div>
  );
};

export default Blog;
