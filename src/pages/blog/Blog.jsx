import React from "react";
import { useState } from "react";

import { DummyPosts } from "../../Data";
import { IoSearch } from "react-icons/io5";

import PostItem from "../post/PostItem";
import Category from "../categorySection/Category";
import "../blog/Blog.css";

const Post = () => {

  const [searchPost, setSearchPost] = useState(DummyPosts);

  const filterPost = (e) => {
    const filteredPosts = DummyPosts.filter((post) => {
      return post.title.toLowerCase().includes(e.target.value.toLowerCase());
    });



    console.log(filteredPosts);
    setSearchPost(filteredPosts);
  };

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  };

  
  return (
    

 

    <>
      <section className="Post">
        <div className="blog_form container">
          <form action="">
            <i>
              <IoSearch />
            </i>

            <input type="text" placeholder="Search for post" onChange={filterPost} />
          </form>
        </div>

        <div className="container post_container">
          {!searchPost.length ? (
            <h2 style={divStyle}>Post not found:)</h2>
          ) : (
            searchPost.map((DummyPosts) => {
              const { id, Image,authorImage,authorName, category,postTime, title, des1 } = DummyPosts;

              const description =
                des1.length > 155 ? des1.substring(0, 155) + "..." : des1;

              const postTitle =
                title.length > 30 ? title.substring(0, 30) + "..." : title;
              return (
                <PostItem
                  key={id}
                  id={id}
                  Image={Image}
                  category={category}
                  title={postTitle}
                  des1={description}
                  authorImage={authorImage}
                  authorName={authorName}
                  postTime={postTime}
                />
              );
            })
          )}
        </div>
      </section>
      <Category />
    </>
  );
};

export default Post;
