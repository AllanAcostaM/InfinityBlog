import React from "react";
import AuthorImage1 from "../../images/MyPicture.png";
import "../postAuthor/PostAuthor.css"


import { Link } from "react-router-dom";

const PostAuthor = () => {
  const FeaturedAuthor = [
    {
      id: 1,
      Image: AuthorImage1,
      authorName: "Jossep Acosta",
      postTime: "January 18 2025",
    },
  ];


  return (
    <div className="post_author">
      {FeaturedAuthor.map((author) => {
        const { id, Image, authorName, postTime } = author;

        return (
          <Link to="/authorspost" className="post_author_wrapper" key={id}>
            <div className="post_author_img">
              <img src={Image} alt="" />
            </div>

            <div className="post_author_info">
              <h4>{authorName}</h4>

              <small>{postTime}</small>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PostAuthor;
