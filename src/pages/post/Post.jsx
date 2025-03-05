import React from "react";
import { DummyPosts } from "../../Data";
import PostItem from "./PostItem";

import "../../pages/post/Post.css";



const Post = () => {

  //  useEffect(() => {
  //     window.scroll(0, 0);
  //   }, []);


  return (
    <>
      <section className="Post">
        <div className="container post_container">
          {DummyPosts.map((DummyPosts) => {
            const { id, Image,authorName,postTime,authorImage, category, title, des1 } = DummyPosts;

            const description =
              des1.length > 155 ? des1.substring(0, 155) + "..." : des;

            const postTitle =
              title.length > 28 ? title.substring(0, 28) + "..." : title;

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
          })}
        </div>
      </section>
    </>
  );
};

export default Post;
