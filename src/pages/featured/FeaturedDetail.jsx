import { Link, useNavigate, useSearchParams } from "react-router-dom";
import PostAuthor from "../../components/postAuthor/PostAuthor";
import { HeadPost } from "../../Data";



const FeaturedDetail = () => {

  return (
    <div className="post_detail">
      <div className="post_detail_container">
        {/* Header Section */}
        <div className="post_detail_head">
          <PostAuthor />
          <div className="post_detail_btns">
            <Link to="/editpost" className="btn">
              Edit
            </Link>
            <Link to="/delete" className="btn danger">
              Delete
            </Link>
          </div>
        </div>

        {HeadPost.map((post) => {
          const { title, Image, des } = post;

          return (
            <div className="featured_detail">
              <h2>{title}</h2>

              <img src={Image} alt="" />

              <h4>{des}</h4>
            </div>
          );
        })}


        {/* Introduction */}
        <p>
          At InfinityBlog, we’ve created a platform that redefines how you engage
          with content. Whether you're a tech enthusiast, a programming geek, or
          someone exploring new ideas, our blog is the ideal destination. Dive
          into an ecosystem designed to connect, inform, and inspire.
        </p>

        {/* Features Section */}

        <h2>Key Features of InfinityBlog</h2>
        <p>
          Infinity Blog offers an array of features tailored for an enhanced
          blogging experience:
        </p>
        <ul>
          <li>
            <strong>Dynamic Content Management:</strong> Authors can
            effortlessly create, edit, and manage posts while readers enjoy
            intuitive navigation.
          </li>
          <li>
            <strong>Featured Posts:</strong> Highlighted posts for trending and
            impactful content curated by admins.
          </li>
          <li>
            <strong>Author Profiles:</strong> Each author has a dedicated
            profile showcasing their contributions to the platform.
          </li>
          <li>
            <strong>Interactive Categories:</strong> Posts are organized into
            categories like Programming, Technology, Web Development, and more
            for easy exploration.
          </li>
        </ul>

        {/* About Blog infinity Codes */}
        <h2>About the Creator: Jossep Acosta</h2>
        <p>
          I'm Jossep Acosta, a software developer passionate about crafting
          innovative and user-focused web solutions. This blog platform is a
          reflection of my dedication to building meaningful tools that empower
          users and foster growth in the digital space. If you’re here, you’re
          part of a journey that celebrates creativity, knowledge, and
          technology.
        </p>

        {/* Call to Action */}
        <p>
          Explore our blog, engage with our posts, and let us know your
          thoughts. Together, we can create a community that thrives on shared
          insights and transformative ideas.
        </p>
      </div>
    </div>
  );
};

export default FeaturedDetail;
