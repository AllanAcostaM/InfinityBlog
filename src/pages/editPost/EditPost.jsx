import { Link } from "react-router-dom";
import { useEffect } from "react";



const EditPost = () => {
    useEffect(() => {
      window.scroll(0, 0);
  
     
    }, []);


  return (
    <section className="form_section">
      <div className="container form_section_container">
        <h2>Edit Post</h2>

        <form action="" className="form_control">
          <input type="text" name="" id="" placeholder="Title" />

          <p>Category</p>
          <select name="" id="">
            <option value="">food</option>
            <option value="">wildlife</option>
          </select>

          <textarea name="" rows="5" id="" placeholder="Body"></textarea>

          <div className="addpost_checkbox">
            <input type="checkbox" name="" id="featured_check" />
            <label htmlFor="featured_check">Featured</label>
          </div>

          <div className="cho_pic">
            <label htmlFor="cho_pic">Upload a picture</label>
            <input type="file" name="" id="cho_pic" />
          </div>

          <Link to="/" className="btn">
            Update
          </Link>
        </form>

        <small>
          Already have an account? <Link to="/login">Login</Link>
        </small>
      </div>
    </section>
  );
};

export default EditPost;
