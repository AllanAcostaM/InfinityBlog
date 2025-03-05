import { Link } from "react-router-dom";
import "../../pages/post/Post.css";

const PostItem = ({
  id,
  Image,
  authorImage,
  authorName,
  category,
  postTime,
  title,
  des1,
}) => {
  return (
    <div className="post_item">
      <Link to={`/postdetail?postId=${id}`} className="post_image">
        <img src={Image} alt="featuredImg" />
      </Link>

      <div className="post_right">
        <Link to="/category" className="category_btn">
          {category}
        </Link>

        <Link to={`/postdetail?postId=${id}`}>
          <h3>{title}</h3>

          <p>{des1}</p>
        </Link>

        {/* POST AUTHOR */}
        <div className="post_author">
          <Link to="/authorspost" className="post_author_wrapper">
            <div className="post_author_img">
              <img src={authorImage} alt="" />
            </div>

            <div className="post_author_info">
              <h4>{authorName}</h4>

              <small>{postTime}</small>
            </div>
          </Link>
        </div>
        {/* <PostAuthor /> */}
      </div>
    </div>
  );
};

export default PostItem;
